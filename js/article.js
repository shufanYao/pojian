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
        <div class="author-avatar">${escapeHtml(a.authorShort[0])}</div>
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
    clear: () => document.execCommand('removeFormat'),
    link: () => {
      const url = prompt('请输入链接 URL：', 'https://');
      if (url) document.execCommand('createLink', false, url);
    }
  };

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
