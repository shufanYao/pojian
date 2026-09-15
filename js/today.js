/* ============================================================
 * 破茧 · 今日手记（today.html）
 * 要处理 / 灵感 / 复盘 —— 数据只存本机浏览器，不上传
 * 存储键一律 pojian:today:*，与阅读笔记 pojian:note:* 并行
 * ============================================================ */
(function () {
  'use strict';

  const K = {
    todos:   'pojian:today:todos',
    done:    'pojian:today:done',
    ideas:   'pojian:today:ideas',
    reviews: 'pojian:today:reviews',
    poss:    'pojian:today:positives'
  };

  /* ---------------- 小工具 ---------------- */
  const $ = id => document.getElementById(id);
  const pad = n => String(n).padStart(2, '0');
  const todayStr = () => { const d = new Date(); return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); };
  const nowTime = () => { const d = new Date(); return pad(d.getHours()) + ':' + pad(d.getMinutes()); };
  const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
  const fmtDate = s => { if (!s) return ''; const p = s.split('-'); return (+p[1]) + '月' + (+p[2]) + '日'; };
  const addDays = (s, n) => { const d = new Date(s + 'T00:00:00'); d.setDate(d.getDate() + n); return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); };

  function loadJSON(k, def) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : def; } catch (e) { return def; } }
  function saveJSON(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { toast('本地存储不可用，这条没存住'); } }

  let toastTimer = null;
  function toast(msg) {
    const t = $('tjToast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 1900);
  }
  function bindEnter(el, fn) {
    if (!el) return;
    el.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); fn(); } });
  }
  /* 灵感 / 复盘是多行输入：Enter 换行，长过上限就自己出现滚动条 */
  function autoGrow(el) {
    if (!el) return;
    const MAX = 170;
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, MAX) + 'px';
    el.style.overflowY = el.scrollHeight > MAX ? 'auto' : 'hidden';
  }

  /* ---------------- 状态 ---------------- */
  let todos = loadJSON(K.todos, []);
  let doneSet = new Set(loadJSON(K.done, []));
  let ideas = loadJSON(K.ideas, []);
  let reviews = loadJSON(K.reviews, []);
  let poss = loadJSON(K.poss, []);
  let showAllIdeas = false, showAllReviews = false, showAllPos = false;

  const isDone = x => doneSet.has(x.id);
  const PRI_ORDER = { P0: 0, P1: 1, P2: 2 };

  /* ---------------- 图标 ---------------- */
  const ICON = {
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1"/></svg>',
    bulb: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 1 4.2 10.3c-.8.7-1.2 1.6-1.2 2.7H9c0-1.1-.4-2-1.2-2.7A6 6 0 0 1 12 3z"/></svg>',
    doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 4h11l3 3v13H5z"/><path d="M8 9h8M8 13h8M8 17h5"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l1.9 4.6L18.5 9l-4.6 1.9L12 15.5l-1.9-4.6L5.5 9l4.6-1.4z"/><path d="M18.5 15.5l.8 1.9 1.9.8-1.9.8-.8 1.9-.8-1.9-1.9-.8 1.9-.8z"/></svg>'
  };
  const emptyBlock = (icon, msg) => `<div class="tj-empty"><span class="tj-empty-ic">${ICON[icon]}</span>${msg}</div>`;

  /* ---------------- 简报：日期旁的三个数 ---------------- */
  function splitFocus() {
    const t = todayStr();
    return {
      t,
      overdue: todos.filter(x => !isDone(x) && x.due && x.due < t),
      today:   todos.filter(x => !isDone(x) && x.due === t),
      soon:    todos.filter(x => !isDone(x) && x.due && x.due > t && x.due <= addDays(t, 2)),
      done:    todos.filter(x => isDone(x))
    };
  }

  function renderBrief() {
    const s = splitFocus();
    $('tjOver').textContent = s.overdue.length;
    $('tjToday').textContent = s.today.length;
    $('tjOpen').textContent = todos.filter(x => !isDone(x)).length;
    $('tjOverBox').classList.toggle('hot', s.overdue.length > 0);
    $('tjTodayBox').classList.toggle('warm', s.today.length > 0);
  }

  /* ---------------- 要处理 ---------------- */
  function renderFocus() {
    const { overdue, today, soon, done } = splitFocus();
    const items = [
      ...overdue.map(x => ({ x, type: 'overdue' })),
      ...today.map(x => ({ x, type: 'today' })),
      ...soon.map(x => ({ x, type: 'soon' }))
    ];
    $('focusCount').textContent = items.length ? items.length + ' 项' : '已清空';

    let html = '';
    if (!items.length) {
      html = emptyBlock('sun', done.length ? '今天到期的事都清完了' : '今天没有到期的事<br>去「编辑待办」加一条，或随手记条灵感');
    } else {
      html = items.map(({ x, type }) => {
        const chip = type === 'overdue' ? `<span class="tj-chip over">逾期 · 应 ${fmtDate(x.due)}</span>`
          : type === 'today' ? '<span class="tj-chip today">今天截止</span>'
            : `<span class="tj-chip soon">即将到期 · ${fmtDate(x.due)}</span>`;
        return `<div class="tj-row ${type}">
          <button type="button" class="tj-check" data-done="${x.id}" aria-label="标记完成"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l4 4 10-10"/></svg></button>
          <div class="tj-row-body"><span class="tj-row-title">${esc(x.title)}</span>${chip}</div>
          <button type="button" class="tj-done-btn" data-done="${x.id}">完成</button>
        </div>`;
      }).join('');
    }

    if (items.length && done.length) {
      html += `<details class="tj-donebox"><summary>已完成 ${done.length} 项</summary>` +
        done.map(x => `<div class="tj-drow"><span class="t">${esc(x.title)}</span><button type="button" class="tj-btn mini undo" data-done="${x.id}">撤销</button></div>`).join('') +
        '</details>';
    }

    const box = $('focusList');
    box.innerHTML = html;
    box.querySelectorAll('[data-done]').forEach(b => b.addEventListener('click', () => toggleTodo(b.getAttribute('data-done'))));
  }

  /* ---------------- 待办管理 ---------------- */
  function renderManage() {
    const box = $('manageList');
    const t = todayStr();
    const sorted = todos.slice().sort((a, b) => {
      const da = a.due || '9999-99-99', db = b.due || '9999-99-99';
      if (da !== db) return da < db ? -1 : 1;
      return (PRI_ORDER[a.pri] == null ? 3 : PRI_ORDER[a.pri]) - (PRI_ORDER[b.pri] == null ? 3 : PRI_ORDER[b.pri]);
    });
    $('manageMeta').textContent = todos.filter(x => !isDone(x)).length + ' 项未完';

    if (!sorted.length) {
      box.innerHTML = emptyBlock('doc', '还没有待办，在下面添加一条，或粘贴一份清单');
      return;
    }
    box.innerHTML = sorted.map(x => `
      <div class="tj-manage-row${isDone(x) ? ' done' : ''}">
        <span class="tj-pri ${esc(x.pri || 'P2')}">${esc(x.pri || 'P2')}</span>
        <div class="tj-manage-main">
          <div class="tj-manage-title">${esc(x.title)}</div>
          <div class="tj-manage-sub">${x.due ? '截止 ' + fmtDate(x.due) + (x.due < t && !isDone(x) ? ' · 已逾期' : '') : '未设截止'}</div>
        </div>
        <div class="tj-manage-act">
          ${isDone(x)
            ? `<button type="button" class="tj-btn mini undo" data-done="${x.id}">撤销</button>`
            : `<button type="button" class="tj-btn mini" data-done="${x.id}">完成</button>`}
          <button type="button" class="tj-btn mini del" data-del="${x.id}">删除</button>
        </div>
      </div>`).join('');

    box.querySelectorAll('[data-done]').forEach(b => b.addEventListener('click', () => toggleTodo(b.getAttribute('data-done'))));
    box.querySelectorAll('[data-del]').forEach(b => b.addEventListener('click', () => deleteTodo(b.getAttribute('data-del'))));
  }

  /* ---------------- 时间轴（灵感 / 复盘通用） ---------------- */
  function groupByDay(arr) {
    const m = {};
    arr.forEach(x => { (m[x.date] = m[x.date] || []).push(x); });
    return m;
  }

  function renderLog(boxId, arr, kind) {
    const box = $(boxId);
    const showAll = kind === 'idea' ? showAllIdeas : showAllReviews;

    if (!arr.length) {
      box.innerHTML = kind === 'idea'
        ? emptyBlock('bulb', '还没有灵感，随手记一条')
        : emptyBlock('doc', '今天还没写复盘，晚上来一笔');
      return;
    }

    const byDay = groupByDay(arr);
    const days = Object.keys(byDay).sort().reverse();
    const t = todayStr();
    const visible = showAll ? days : days.filter(d => d === t);

    let html = visible.length
      ? '<div class="tj-tl">' + visible.map(day => `
          <div class="tj-tlday${day === t ? ' now' : ''}">${day === t ? '今天' : day} · ${byDay[day].length} 条</div>
          ${byDay[day].map(it => `
            <div class="tj-item">
              <div class="tx">${esc(it.text)}</div>
              <div class="tm">${esc(it.time || '')}</div>
              <button type="button" class="del" data-del-${kind}="${it.id}">删除</button>
            </div>`).join('')}
        `).join('') + '</div>'
      : '<div class="tj-empty">今天还没有记录</div>';

    const others = days.filter(d => d !== t).length;
    if (others || showAll) {
      html += `<button type="button" class="tj-more" data-toggle="${kind}">${showAll ? '收起历史' : '历史记录 · ' + others + ' 天'}</button>`;
    }
    box.innerHTML = html;

    box.querySelectorAll(`[data-del-${kind}]`).forEach(b => b.addEventListener('click', () => {
      const id = b.getAttribute(`data-del-${kind}`);
      if (kind === 'idea') deleteIdea(id); else deleteReview(id);
    }));
    const tg = box.querySelector(`[data-toggle="${kind}"]`);
    if (tg) tg.addEventListener('click', () => {
      if (kind === 'idea') showAllIdeas = !showAllIdeas; else showAllReviews = !showAllReviews;
      refresh();
    });
  }

  /* ---------------- 三件积极的事 ---------------- */
  function renderPos() {
    const box = $('posList');
    if (!poss.length) {
      box.innerHTML = emptyBlock('star', '今天还没有记下积极的事');
      return;
    }
    const byDay = groupByDay(poss);
    const days = Object.keys(byDay).sort().reverse();
    const t = todayStr();
    const visible = showAllPos ? days : days.filter(d => d === t);

    let html = visible.length
      ? '<div class="tj-tl">' + visible.map(day => `
          <div class="tj-tlday${day === t ? ' now' : ''}">${day === t ? '今天' : day}</div>
          ${byDay[day].map(p => `
            <div class="tj-item">
              ${(p.items || []).map((s, j) => `<div class="tj-pos-line"><span class="tj-pnum">${j + 1}</span><span>${esc(s)}</span></div>`).join('')}
              <div class="tm">${esc(p.time || '')}</div>
              <button type="button" class="del" data-del-pos="${p.id}">删除</button>
            </div>`).join('')}
        `).join('') + '</div>'
      : '<div class="tj-empty">今天还没有记录</div>';

    const others = days.filter(d => d !== t).length;
    if (others || showAllPos) {
      html += `<button type="button" class="tj-more" data-toggle="pos">${showAllPos ? '收起历史' : '历史记录 · ' + others + ' 天'}</button>`;
    }
    box.innerHTML = html;

    box.querySelectorAll('[data-del-pos]').forEach(b => b.addEventListener('click', () => deletePos(b.getAttribute('data-del-pos'))));
    const tg = box.querySelector('[data-toggle="pos"]');
    if (tg) tg.addEventListener('click', () => { showAllPos = !showAllPos; refresh(); });
  }

  function refresh() {
    renderBrief();
    renderFocus();
    renderManage();
    renderLog('ideaList', ideas, 'idea');
    renderLog('reviewList', reviews, 'review');
    renderPos();
  }

  /* ---------------- 动作 ---------------- */
  function toggleTodo(id) {
    if (doneSet.has(id)) doneSet.delete(id); else doneSet.add(id);
    saveJSON(K.done, Array.from(doneSet));
    refresh();
  }

  function deleteTodo(id) {
    todos = todos.filter(x => x.id !== id);
    doneSet.delete(id);
    saveJSON(K.todos, todos);
    saveJSON(K.done, Array.from(doneSet));
    refresh();
  }

  function addTodo() {
    const el = $('todoInput');
    const title = el.value.trim();
    if (!title) { toast('先写点什么'); return; }
    const pri = $('todoPri').value;
    const due = $('todoDate').value || '';
    todos.push({ id: uid(), title, pri, due, done: false });
    saveJSON(K.todos, todos);
    el.value = '';
    refresh();
    toast('已添加');
  }

  function importTodos() {
    const el = $('todoPaste');
    const txt = el.value.trim();
    if (!txt) { toast('先粘贴一份清单'); return; }
    const lines = txt.split(/\r?\n/).map(s => s.trim()).filter(Boolean);
    let n = 0;
    lines.forEach(line => {
      let pri = 'P2', due = '', title = line;
      const pm = line.match(/^(P0|P1|P2)[:：]?\s*(.*)$/i);
      if (pm) { pri = pm[1].toUpperCase(); title = pm[2]; }
      const dm = title.match(/^(.*?)\s*[|｜]\s*(\d{4}-\d{2}-\d{2})\s*$/);
      if (dm) { title = dm[1]; due = dm[2]; }
      if (!title) return;
      todos.push({ id: uid(), title, pri, due, done: false });
      n++;
    });
    saveJSON(K.todos, todos);
    el.value = '';
    refresh();
    toast(n ? '已导入 ' + n + ' 条' : '没有识别到条目');
  }

  function addIdea() {
    const el = $('ideaInput');
    const v = el.value.trim();
    if (!v) { toast('写点什么吧'); return; }
    ideas.push({ id: uid(), text: v, date: todayStr(), time: nowTime() });
    saveJSON(K.ideas, ideas);
    el.value = '';
    autoGrow(el);
    refresh();
    toast('灵感已记下');
  }
  function deleteIdea(id) { ideas = ideas.filter(x => x.id !== id); saveJSON(K.ideas, ideas); refresh(); }

  function addReview() {
    const el = $('reviewInput');
    const v = el.value.trim();
    if (!v) { toast('写点什么吧'); return; }
    reviews.push({ id: uid(), text: v, date: todayStr(), time: nowTime() });
    saveJSON(K.reviews, reviews);
    el.value = '';
    autoGrow(el);
    refresh();
    toast('复盘已保存');
  }
  function deleteReview(id) { reviews = reviews.filter(x => x.id !== id); saveJSON(K.reviews, reviews); refresh(); }

  function addPos() {
    const ins = [1, 2, 3].map(i => $('posIn' + i));
    const items = ins.map(e => e.value.trim()).filter(Boolean);
    if (!items.length) { toast('至少写一件吧'); return; }
    poss.push({ id: uid(), items, date: todayStr(), time: nowTime() });
    saveJSON(K.poss, poss);
    ins.forEach(e => { e.value = ''; });
    refresh();
    toast('已记下今天的积极时刻');
  }
  function deletePos(id) { poss = poss.filter(x => x.id !== id); saveJSON(K.poss, poss); refresh(); }

  function copyToday(kind) {
    const t = todayStr();
    const done = txt => {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(txt).then(() => toast('已复制到剪贴板'), () => toast('复制失败，请手动选择'));
      } else { toast('这个环境不支持自动复制'); }
    };
    if (kind === 'idea') {
      const day = ideas.filter(x => x.date === t);
      if (!day.length) { toast('今天还没有灵感'); return; }
      done('【灵感】' + t + '\n' + day.map(x => '· ' + x.text).join('\n'));
      return;
    }
    const sum = reviews.filter(x => x.date === t);
    const pos = poss.filter(x => x.date === t);
    if (!sum.length && !pos.length) { toast('今天还没有复盘'); return; }
    const lines = ['【今日复盘】' + t];
    if (sum.length) { lines.push('· 今日总结'); sum.forEach(x => lines.push('  ' + x.text)); }
    if (pos.length) { lines.push('· 三件积极的事'); pos.forEach(p => (p.items || []).forEach((s, i) => lines.push('  ' + (i + 1) + ') ' + s))); }
    done(lines.join('\n'));
  }

  function toggleEditor(force) {
    const panel = $('todoEditor'), btn = $('todoEditBtn');
    if (!panel || !btn) return;
    const open = typeof force === 'boolean' ? force : !panel.classList.contains('open');
    panel.classList.toggle('open', open);
    btn.classList.toggle('on', open);
    btn.textContent = open ? '收起' : '编辑待办';
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) {
      const r = panel.getBoundingClientRect();
      if (r.bottom > window.innerHeight) {
        window.scrollBy({ top: Math.min(r.bottom - window.innerHeight + 24, r.top - 90), behavior: 'smooth' });
      }
    }
  }

  /* ---------------- 初始化 ---------------- */
  function init() {
    const d = new Date();
    $('tjDay').textContent = d.getDate();
    $('tjMon').textContent = (d.getMonth() + 1) + '月';
    $('tjWk').textContent = '周' + '日一二三四五六'.charAt(d.getDay());
    $('todoDate').value = todayStr();

    $('todoEditBtn').addEventListener('click', () => toggleEditor());
    $('todoAddBtn').addEventListener('click', addTodo);
    bindEnter($('todoInput'), addTodo);
    $('todoImportBtn').addEventListener('click', importTodos);

    const ideaIn = $('ideaInput'), reviewIn = $('reviewInput');
    ideaIn.addEventListener('input', () => autoGrow(ideaIn));
    reviewIn.addEventListener('input', () => autoGrow(reviewIn));
    $('ideaAddBtn').addEventListener('click', addIdea);
    $('ideaCopyBtn').addEventListener('click', () => copyToday('idea'));

    $('reviewAddBtn').addEventListener('click', addReview);
    $('reviewCopyBtn').addEventListener('click', () => copyToday('review'));

    $('posAddBtn').addEventListener('click', addPos);
    [1, 2, 3].forEach(i => bindEnter($('posIn' + i), addPos));

    document.addEventListener('keydown', e => { if (e.key === 'Escape') toggleEditor(false); });

    refresh();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
