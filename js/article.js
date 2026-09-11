/* ============================================================
 * 破茧 · 文章页：渲染 + 原文/译文切换 + 阅读笔记编辑器
 * ============================================================ */
(function () {
  const content = document.getElementById('content');
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const a = ARTICLES.find(x => x.id === id);

  /* ---------- 未找到 ---------- */
  if (!a) {
    content.innerHTML = `
      <div class="locked-screen">
        <div class="lock-ic">${LOCK_SVG}</div>
        <h1 class="ls-title">没有找到这篇文章</h1>
        <p class="ls-text">它可能尚未发布，或链接有误。</p>
        <a class="ls-back" href="index.html">← 返回首页</a>
      </div>`;
    return;
  }

  const cat = CAT_MAP[a.cat];

  /* ---------- 未发布：解锁倒计时页 ---------- */
  if (!isPublished(a)) {
    document.title = a.title + ' · 破茧';
    const diff = new Date(a.publishAt) - new Date();
    const dd = Math.floor(diff / 864e5);
    const hh = Math.floor(diff % 864e5 / 36e5);
    const wait = diff > 0 ? `（距今约 ${dd ? dd + ' 天 ' : ''}${hh} 小时）` : '';
    content.innerHTML = `
      <div class="locked-screen cat-${a.cat}">
        <div class="lock-ic">${LOCK_SVG}</div>
        <div class="a-eyebrow">${cat.name}</div>
        <h1 class="ls-title">${escapeHtml(a.title)}</h1>
        <p class="ls-author">${escapeHtml(a.author)} · ${escapeHtml(a.era)}</p>
        <p class="ls-text">本文将于 <b>${fmtPublish(a.publishAt)}</b> 更新${wait}，敬请期待。</p>
        <a class="ls-back" href="index.html">← 返回首页</a>
      </div>`;
    return;
  }

  /* ---------- 已发布：完整渲染 ---------- */
  const list = ARTICLES
    .filter(x => x.cat === a.cat && isPublished(x))
    .sort((x, y) => new Date(x.publishAt) - new Date(y.publishAt));
  const idx = list.indexOf(a);
  const prev = list[idx - 1];
  const next = list[idx + 1];

  const hasTrans = !!a.translation;
  const origLabel = a.originalLabel || (a.lang === 'en' ? '英文原文' : a.lang === 'fr' ? '法文原文' : '原文');
  const transLabel = a.translationLabel || (a.lang === 'zh' ? '白话译文' : '中文译文');

  // 作者卡头像字符：中文作者取姓名首字；外文作者必须由 authorInitial 指定拉丁字母
  // （西文人名的汉字只是音译，取首字会得出"林肯→林""戴高乐→戴"这类并不存在的姓氏）
  const authorInitial = a.authorInitial || a.authorShort[0];
  const isLatinInitial = /^[A-Za-z]$/.test(authorInitial);

  function renderBody(text, type) {
    const parts = text.trim().split(/\n\s*\n/);
    if (type === 'verse') {
      return parts.map(s => `<p class="stanza">${escapeHtml(s)}</p>`).join('');
    }
    return parts.map(p => `<p>${escapeHtml(p)}</p>`).join('');
  }
  function renderSignoff(s) {
    if (!s) return '';
    return `<div class="signoff">${escapeHtml(s[0])}<span class="name">${escapeHtml(s[1])}</span>${escapeHtml(s[2] || '')}</div>`;
  }

  document.title = a.title + ' · 破茧';
  content.className = 'content cat-' + a.cat;
  content.innerHTML = `
    <div class="crumbs">
      <a href="index.html">破茧</a> ›
      <a href="index.html#${a.cat}">${cat.name}</a> ›
      <span>${escapeHtml(a.title)}</span>
    </div>

    <header class="a-head">
      <div class="a-head-main">
        <div class="a-eyebrow">${cat.name} · 第 ${idx + 1} 篇 · ${fmtPublishShort(a.publishAt)}</div>
        <h1>${escapeHtml(a.title)}</h1>
        ${a.subtitle ? `<div class="a-subtitle">${escapeHtml(a.subtitle)}</div>` : ''}
        <div class="a-meta">${escapeHtml(a.author)} · ${escapeHtml(a.era)}</div>
      </div>
      <button class="note-toggle" id="btnNotes" type="button">${PEN_SVG}<span>阅读笔记</span></button>
    </header>

    <section class="a-sec">
      <h2>作者简介</h2>
      <div class="author-card">
        <div class="author-avatar${isLatinInitial ? ' latin' : ''}">${escapeHtml(authorInitial)}</div>
        <div>
          <h3>${escapeHtml(a.authorShort)}</h3>
          <div class="author-role">${escapeHtml(a.authorRole)}</div>
          ${a.authorIntro.map(p => `<p>${escapeHtml(p)}</p>`).join('')}
          <div class="facts">
            ${a.facts.map(f => `<div class="fact"><div class="k">${escapeHtml(f[0])}</div><div class="v">${escapeHtml(f[1])}</div></div>`).join('')}
          </div>
        </div>
      </div>
    </section>

    <section class="a-sec">
      <h2>创作背景</h2>
      <div class="bg-grid">
        ${a.background.map(c => `<div class="bg-card"><h4>${escapeHtml(c.h)}</h4><p>${escapeHtml(c.p)}</p></div>`).join('')}
      </div>
    </section>

    ${(a.caveat && a.caveat.length) ? `
    <section class="a-sec">
      <h2>考据说明</h2>
      <div class="caveat">
        ${a.caveat.map(t => `<p>${escapeHtml(t)}</p>`).join('')}
      </div>
    </section>` : ''}

    <section class="a-sec">
      <h2>${hasTrans ? '原文与译文' : '原文'}</h2>
      ${hasTrans ? `
      <div class="lang-pill">
        <button class="lang-btn active" data-lang="orig">${escapeHtml(origLabel)}</button>
        <button class="lang-btn" data-lang="trans">${escapeHtml(transLabel)}</button>
      </div>` : ''}
      <div class="text-box">
        <div class="text-panel text-orig active ${a.type === 'verse' ? 'text-verse' : ''} ${a.lang !== 'zh' ? 'text-en' : ''}">
          ${renderBody(a.original, a.type)}
          ${renderSignoff(a.signoff)}
        </div>
        ${hasTrans ? `
        <div class="text-panel text-trans">
          ${renderBody(a.translation, 'prose')}
          ${renderSignoff(a.signoffT)}
        </div>` : ''}
      </div>
    </section>

    <nav class="a-nav">
      ${prev ? `<a class="a-nav-link prev" href="article.html?id=${prev.id}">‹ 上一篇<br><span>${escapeHtml(prev.title)}</span></a>` : '<span></span>'}
      ${next ? `<a class="a-nav-link next" href="article.html?id=${next.id}">下一篇 ›<br><span>${escapeHtml(next.title)}</span></a>` : '<span></span>'}
    </nav>
  `;

  /* ---------- 原文 / 译文 切换 ---------- */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.text-panel').forEach(p => p.classList.remove('active'));
      document.querySelector('.text-' + lang).classList.add('active');
    });
  });

  /* ============================================================
   * 阅读笔记：左文右笔 分栏编辑器
   * ============================================================ */
  const editor = document.getElementById('editor');
  const countEl = document.getElementById('count');
  const saveSt = document.getElementById('saveState');
  const btnNotes = document.getElementById('btnNotes');
  const notesTitle = document.getElementById('notesTitle');
  const STORAGE = 'pojian:note:' + a.id;

  notesTitle.textContent = '《' + a.title + '》· 我的笔记';
  editor.dataset.placeholder = '写下你读《' + a.title + '》的感想、批注与联想……';

  const saved = localStorage.getItem(STORAGE);
  if (saved) editor.innerHTML = saved;

  /* 字数统计 */
  function updateCount() {
    countEl.textContent = editor.innerText.trim().length + ' 字';
  }
  updateCount();

  /* 自动保存（防抖） */
  let saveTimer = null;
  editor.addEventListener('input', () => {
    updateCount();
    saveSt.textContent = '编辑中…';
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
      localStorage.setItem(STORAGE, editor.innerHTML);
      saveSt.textContent = '已自动保存 · ' + new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
    }, 600);
  });

  /* 分栏开关 */
  function setNoteMode(on) {
    document.body.classList.toggle('note-mode', on);
    btnNotes.querySelector('span').textContent = on ? '收起笔记' : '阅读笔记';
    const hash = location.search + (on ? '#notes' : '');
    try { history.replaceState(null, '', hash || location.pathname); } catch (e) { }
    if (on) setTimeout(() => editor.focus(), 60);
  }
  btnNotes.addEventListener('click', () => setNoteMode(!document.body.classList.contains('note-mode')));
  if (location.hash === '#notes') setNoteMode(true);

  /* 工具栏指令 */
  try { document.execCommand('styleWithCSS', false, false); } catch (e) { }
  const cmds = {
    bold: () => document.execCommand('bold'),
    italic: () => document.execCommand('italic'),
    underline: () => document.execCommand('underline'),
    h3: () => document.execCommand('formatBlock', false, '<h3>'),
    quote: () => document.execCommand('formatBlock', false, '<blockquote>'),
    ul: () => document.execCommand('insertUnorderedList'),
    ol: () => document.execCommand('insertOrderedList'),
    clear: () => clearFormatting(),
    link: () => {
      const url = prompt('请输入链接 URL：', 'https://');
      if (url) document.execCommand('createLink', false, url);
    }
  };

  /* ---------- 清除格式：行内 + 块级 ----------
   * 注意：execCommand('removeFormat') 只清得掉行内格式（加粗/斜体/下划线/链接），
   * 对 formatBlock 产生的块级格式（小标题 h1-h6、引用块 blockquote、代码块 pre）
   * 和列表（ul/ol）无效——这正是"设成小标题或引用块后清不掉"的原因。
   * 这里在行内格式之外，把命中的块级元素一并还原成普通段落。 */
  const BLOCK_TAGS = 'h1,h2,h3,h4,h5,h6,blockquote,pre,div';
  const NESTED_BLOCK = 'p,ul,ol,li,div,blockquote,pre,h1,h2,h3,h4,h5,h6';

  function hasBlockInside(el) { return !!el.querySelector(NESTED_BLOCK); }
  function depth(el) { let d = 0; for (let n = el.parentNode; n && n !== editor; n = n.parentNode) d++; return d; }

  /* 元素内容按 <br> 拆成若干普通段落（Chromium 把多段合并成标题时用 <br> 连接，这里还原） */
  function splitIntoParagraphs(el) {
    const out = [];
    let p = document.createElement('p');
    while (el.firstChild) {
      const node = el.firstChild;
      if (node.nodeType === 1 && node.tagName === 'BR') { node.remove(); out.push(p); p = document.createElement('p'); }
      else p.appendChild(node);
    }
    out.push(p);
    while (out.length > 1 && !out[out.length - 1].firstChild) out.pop();  // 去掉尾部空段
    return out;
  }

  /* 把 el 的内容取成一组可放在块级语境里的节点：
   * 已是块级结构 → 块级子节点原样取出，散落的行内内容另包成段落；
   * 纯行内内容 → 按 <br> 拆成段落。
   * 两种分支都会把 el 掏空，节点交给调用方插入。 */
  function contentToBlocks(el) {
    if (!hasBlockInside(el)) return splitIntoParagraphs(el);
    const out = [];
    let p = null;
    const flush = () => { if (p && p.firstChild) out.push(p); p = null; };
    while (el.firstChild) {
      const node = el.firstChild;
      if (node.nodeType === 1 && (node.tagName === 'BR' || node.matches(NESTED_BLOCK))) {
        el.removeChild(node);
        if (node.tagName === 'BR') { flush(); continue; }
        flush();
        out.push(node);
      } else {
        if (!p) p = document.createElement('p');
        p.appendChild(node);
      }
    }
    flush();
    return out;
  }

  /* 块级元素 → 普通段落（或脱去外壳保留内部结构）；返回新节点数组，供光标复位 */
  function normalizeBlock(el) {
    const blocks = contentToBlocks(el);
    const frag = document.createDocumentFragment();
    blocks.forEach(n => frag.appendChild(n));
    el.replaceWith(frag);
    return blocks;
  }

  function collapseAt(node, offset) {
    const r = document.createRange();
    r.setStart(node, offset);
    r.collapse(true);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(r);
  }
  function offsetIn(el, range) {
    if (!el.contains(range.startContainer)) return -1;
    const r = document.createRange();
    r.selectNodeContents(el);
    r.setEnd(range.startContainer, range.startOffset);
    return r.toString().length;
  }
  function setCaretByOffset(el, offset) {
    let acc = 0;
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      const len = node.nodeValue.length;
      if (acc + len >= offset) { collapseAt(node, Math.max(0, Math.min(len, offset - acc))); return; }
      acc += len;
    }
    const r = document.createRange();
    r.selectNodeContents(el);
    r.collapse(false);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(r);
  }

  function clearFormatting() {
    const sel = window.getSelection();
    if (!sel || !sel.rangeCount) return;
    const range = sel.getRangeAt(0);
    const wasCollapsed = range.collapsed;

    /* ① 行内格式：加粗 / 斜体 / 下划线 / 链接 / 内联样式 */
    document.execCommand('removeFormat');

    /* ② 记下光标所在的块，清除后复位 */
    const caretBlock = (() => {
      let n = range.startContainer;
      if (n && n.nodeType !== 1) n = n.parentNode;
      while (n && n !== editor && !n.matches(BLOCK_TAGS + ',li')) n = n.parentNode;
      return n && n !== editor ? n : null;
    })();
    const caretOffset = caretBlock ? offsetIn(caretBlock, range) : -1;

    const replaced = new Map();   // 原块 → 还原后的首个段落（供光标复位用）
    let lastMade = null;

    /* ③ 列表：命中的 ul/ol 整段拆成普通段落（由内向外，先处理嵌套的内层列表） */
    [...editor.querySelectorAll('ul,ol')].filter(el => {
      try { return range.intersectsNode(el); } catch (e) { return false; }
    }).sort((a, b) => depth(b) - depth(a)).forEach(list => {
      if (!list.isConnected) return;
      const host = list.parentNode;   // Chromium 的 insertUnorderedList 可能把列表塞进 <p> 里
      const frag = document.createDocumentFragment();
      [...list.children].forEach(li => {
        if (li.tagName !== 'LI') return;
        const tmp = document.createElement('div');
        while (li.firstChild) tmp.appendChild(li.firstChild);
        const blocks = contentToBlocks(tmp);
        blocks.forEach(n => frag.appendChild(n));
        replaced.set(li, blocks[0] || null);
        if (blocks.length) lastMade = blocks[blocks.length - 1];
      });
      list.replaceWith(frag);
      // 脱掉包裹列表的非法外壳（<p><ul>…</ul></p>），否则会留下 p 套 p
      if (host && host.nodeName === 'P') {
        const made = normalizeBlock(host);
        replaced.set(host, made[0] || null);
        if (made.length) lastMade = made[made.length - 1];
      }
    });

    /* ④ 块级格式：小标题 / 引用块 / 代码块 → 普通段落（由内向外，先深后浅） */
    [...editor.querySelectorAll(BLOCK_TAGS)].filter(el => {
      try { return range.intersectsNode(el); } catch (e) { return false; }
    }).sort((x, y) => depth(y) - depth(x)).forEach(el => {
      if (!el.isConnected) return;
      const made = normalizeBlock(el);
      replaced.set(el, made[0] || null);
      if (made.length) lastMade = made[made.length - 1];
    });

    /* ⑤ 光标复位：折叠光标回到原处，否则落到最后一个受影响块的末尾 */
    editor.focus();
    const target = caretBlock ? (caretBlock.isConnected ? caretBlock : replaced.get(caretBlock)) : null;
    if (wasCollapsed && target) setCaretByOffset(target, Math.max(0, caretOffset));
    else if (lastMade && lastMade.isConnected) setCaretByOffset(lastMade, Infinity);

    /* ⑥ 触发字数统计与自动保存（DOM 直改不会产生 input 事件） */
    editor.dispatchEvent(new Event('input', { bubbles: true }));
  }

  function placeCaretEnd() {
    const range = document.createRange();
    range.selectNodeContents(editor);
    range.collapse(false);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  }
  function selectionInEditor() {
    const sel = window.getSelection();
    return sel && sel.anchorNode && editor.contains(sel.anchorNode);
  }
  const toggleCmds = ['bold', 'italic', 'underline'];
  const cmdLabel = { bold: '加粗', italic: '斜体', underline: '下划线' };
  function refreshToolbarState() {
    document.querySelectorAll('.tb-btn').forEach(btn => {
      const cmd = btn.dataset.cmd;
      if (toggleCmds.includes(cmd)) {
        let active = false;
        try { active = document.queryCommandState(cmd); } catch (e) { }
        btn.classList.toggle('active', active);
      }
    });
  }

  document.querySelectorAll('.tb-btn').forEach(btn => {
    btn.addEventListener('mousedown', e => e.preventDefault()); // 防止编辑区失焦
    btn.addEventListener('click', () => {
      const cmd = btn.dataset.cmd;
      if (!cmds[cmd]) return;
      if (!selectionInEditor()) { editor.focus(); placeCaretEnd(); }
      cmds[cmd]();
      refreshToolbarState();
      editor.focus();
      if (toggleCmds.includes(cmd)) {
        let on = false;
        try { on = document.queryCommandState(cmd); } catch (e) { }
        saveSt.textContent = cmdLabel[cmd] + (on ? '：已开启' : '：已关闭');
      } else if (cmd === 'clear') {
        saveSt.textContent = '格式已清除';
      }
    });
  });
  document.addEventListener('selectionchange', () => { if (selectionInEditor()) refreshToolbarState(); });
  editor.addEventListener('keyup', refreshToolbarState);
  editor.addEventListener('mouseup', refreshToolbarState);
  editor.addEventListener('focus', refreshToolbarState);

  /* 底部按钮：保存 / 导出 / 清空 */
  document.getElementById('btnSave').addEventListener('click', () => {
    localStorage.setItem(STORAGE, editor.innerHTML);
    saveSt.textContent = '已保存 · ' + new Date().toLocaleString('zh-CN');
  });

  document.getElementById('btnExport').addEventListener('click', () => {
    const html = editor.innerHTML;
    let md = html
      .replace(/<h3>(.*?)<\/h3>/gi, '\n### $1\n')
      .replace(/<blockquote>(.*?)<\/blockquote>/gi, '\n> $1\n')
      .replace(/<strong>(.*?)<\/strong>/gi, '**$1**')
      .replace(/<b>(.*?)<\/b>/gi, '**$1**')
      .replace(/<em>(.*?)<\/em>/gi, '*$1*')
      .replace(/<i>(.*?)<\/i>/gi, '*$1*')
      .replace(/<u>(.*?)<\/u>/gi, '$1')
      .replace(/<a [^>]*href="([^"]+)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)')
      .replace(/<li>(.*?)<\/li>/gi, '- $1\n')
      .replace(/<\/?(ul|ol|p|div|br)[^>]*>/gi, '\n')
      .replace(/&nbsp;/g, ' ')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
    const blob = new Blob(['\uFEFF# ' + a.title + ' · 阅读笔记\n\n' + md], { type: 'text/markdown;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = a.title + ' - 阅读笔记.md';
    link.click();
    URL.revokeObjectURL(link.href);
  });

  document.getElementById('btnClear').addEventListener('click', () => {
    if (!editor.innerText.trim()) { alert('笔记已经为空啦。'); return; }
    if (confirm('确定要清空本篇笔记吗？此操作不可恢复（建议先导出备份）。')) {
      editor.innerHTML = '';
      localStorage.removeItem(STORAGE);
      saveSt.textContent = '已清空';
      updateCount();
      editor.focus();
    }
  });

  /* 快捷键 */
  editor.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && !e.shiftKey) {
      const k = e.key.toLowerCase();
      if (k === 'b') { e.preventDefault(); document.execCommand('bold'); }
      else if (k === 'i') { e.preventDefault(); document.execCommand('italic'); }
      else if (k === 'u') { e.preventDefault(); document.execCommand('underline'); }
    }
  });

  /* 离开页面前再存一次 */
  window.addEventListener('beforeunload', () => {
    if (editor.innerText.trim()) localStorage.setItem(STORAGE, editor.innerHTML);
  });
})();
