/* ============================================================
 * 破茧 · 共享工具
 * ============================================================ */

const CAT_MAP = Object.fromEntries(CATEGORIES.map(c => [c.id, c]));
const WEEK = ['日', '一', '二', '三', '四', '五', '六'];

/* 锁形图标（未发布文章用） */
const LOCK_SVG = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 10V7a5 5 0 0 1 10 0v3h1a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h1zm2 0h6V7a3 3 0 0 0-6 0v3z"/></svg>';

/* 笔形图标（阅读笔记按钮用） */
const PEN_SVG = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>';

/* 链形图标（工具栏插入链接用） */
const LINK_SVG = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M10 14a5 5 0 0 0 7.07 0l3.18-3.18a5 5 0 0 0-7.07-7.07L11.5 5.4"/><path d="M14 10a5 5 0 0 0-7.07 0l-3.18 3.18a5 5 0 0 0 7.07 7.07l1.67-1.66"/></svg>';

function pad(n) { return String(n).padStart(2, '0'); }

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, m => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]
  ));
}

/* 文章是否已到发布时间 */
function isPublished(a, now = new Date()) {
  return new Date(a.publishAt) <= now;
}

/* 格式化发布时间：2026-09-11T20:00 → “9月11日（周五）20:00” */
function fmtPublish(iso) {
  const d = new Date(iso);
  return `${d.getMonth() + 1}月${d.getDate()}日（周${WEEK[d.getDay()]}）${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

/* 短格式：→ “9月11日更新” */
function fmtPublishShort(iso) {
  const d = new Date(iso);
  return `${d.getMonth() + 1}月${d.getDate()}日更新`;
}

/* 计算下一个更新时点（周一/三/五 20:00） */
function nextUpdate(from = new Date()) {
  for (let i = 0; i < 8; i++) {
    const d = new Date(from.getFullYear(), from.getMonth(), from.getDate() + i, 20, 0, 0);
    const wd = d.getDay();
    if ((wd === 1 || wd === 3 || wd === 5) && d > from) return d;
  }
  return null;
}
