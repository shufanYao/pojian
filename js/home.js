/* ============================================================
 * 破茧 · 主页逻辑：栏目渲染 + 更新倒计时
 * ============================================================ */
(function () {
  const main = document.getElementById('homeMain');
  const now = new Date();
  let html = '';

  CATEGORIES.forEach(cat => {
    const list = ARTICLES
      .filter(a => a.cat === cat.id)
      .sort((x, y) => new Date(x.publishAt) - new Date(y.publishAt));

    html += `<section class="cat-section cat-${cat.id}" id="${cat.id}">`;
    html += `<div class="cat-head"><div class="cat-badge">${cat.badge}</div><h2>${cat.name}</h2></div>`;
    html += `<p class="cat-desc">${cat.desc}</p>`;
    html += `<div class="card-grid">`;

    list.forEach(a => {
      const d = new Date(a.publishAt);
      const dateTxt = `${d.getMonth() + 1}月${d.getDate()}日（周${WEEK[d.getDay()]}）`;
      if (isPublished(a, now)) {
        html += `
          <a class="art-card" href="article.html?id=${a.id}">
            <div class="card-meta"><span class="card-date">已更新 · ${dateTxt}</span></div>
            <h3>${escapeHtml(a.title)}</h3>
            <p class="card-author">${escapeHtml(a.author)}</p>
            <p class="card-excerpt">${escapeHtml(a.excerpt)}</p>
          </a>`;
      } else {
        html += `
          <a class="art-card locked" href="article.html?id=${a.id}">
            <div class="card-meta">
              <span class="card-date lock-badge">${LOCK_SVG}${dateTxt} 20:00 解锁</span>
            </div>
            <h3>${escapeHtml(a.title)}</h3>
            <p class="card-author">${escapeHtml(a.author)}</p>
            <p class="card-excerpt">待更新</p>
          </a>`;
      }
    });

    html += `</div></section>`;
  });

  main.innerHTML = html;

  /* ---- 下次更新倒计时 ---- */
  const el = document.getElementById('heroCountdown');
  function tick() {
    const t = nextUpdate();
    if (!t) { el.textContent = ''; return; }
    const diff = Math.max(0, t - new Date());
    const d = Math.floor(diff / 864e5);
    const h = Math.floor(diff % 864e5 / 36e5);
    const m = Math.floor(diff % 36e5 / 6e4);
    const s = Math.floor(diff % 6e4 / 1e3);
    el.innerHTML =
      `下次更新 <b>${t.getMonth() + 1}月${t.getDate()}日（周${WEEK[t.getDay()]}）20:00</b>` +
      ` · 距今 <b>${d}</b> 天 <b>${pad(h)}</b> 时 <b>${pad(m)}</b> 分 <b>${pad(s)}</b> 秒`;
  }
  tick();
  setInterval(tick, 1000);
})();
