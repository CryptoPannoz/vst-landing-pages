/* ============================================================
   VST — shared behaviour: nav, reveals, counters, parallax,
   itinerary renderer, departures renderer, forms, FAQ.
   ============================================================ */

(function () {
  'use strict';

  /* ---------- scroll progress + nav state ---------- */
  const progress = document.getElementById('progress');
  const nav = document.querySelector('nav');
  function onScroll() {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    if (progress) progress.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
    if (nav) nav.classList.toggle('scrolled', h.scrollTop > 40);
    parallax();
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- reveal on scroll ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        if (e.target.dataset.count !== undefined) countUp(e.target);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  function observeAll(root) {
    (root || document).querySelectorAll('.reveal,.stagger,[data-count]').forEach((el) => io.observe(el));
  }

  /* ---------- count-up stats ---------- */
  function countUp(el) {
    const target = parseFloat(el.dataset.count);
    if (isNaN(target)) return;
    const suffix = el.dataset.suffix || '';
    const dur = 1400, t0 = performance.now();
    function tick(t) {
      const p = Math.min((t - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.childNodes[0].nodeValue = Math.round(target * eased);
      if (p < 1) requestAnimationFrame(tick);
      else el.childNodes[0].nodeValue = target;
    }
    if (!el.querySelector('.suffix') && suffix) {
      const s = document.createElement('span');
      s.className = 'suffix'; s.textContent = suffix;
      el.appendChild(s);
    }
    el.insertBefore(document.createTextNode('0'), el.firstChild);
    requestAnimationFrame(tick);
  }

  /* ---------- light parallax on .split-img img ---------- */
  const pxEls = Array.from(document.querySelectorAll('.split-img img'));
  function parallax() {
    const vh = window.innerHeight;
    pxEls.forEach((img) => {
      const r = img.parentElement.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      const p = (r.top + r.height / 2 - vh / 2) / vh; // -0.5..0.5
      img.style.transform = 'translateY(' + (p * -34) + 'px)';
    });
  }

  /* ---------- itineraries (tabs + timeline) ---------- */
  const itiRoot = document.getElementById('itineraries');
  if (itiRoot && typeof VST_ITINERARIES !== 'undefined') {
    const keys = Object.keys(VST_ITINERARIES);
    const tabs = document.createElement('div');
    tabs.className = 'tabs';
    const pane = document.createElement('div');

    function renderDest(key) {
      const d = VST_ITINERARIES[key];
      pane.innerHTML = '';
      const tl = document.createElement('div');
      tl.className = 'timeline';
      d.days.forEach((day, i) => {
        const el = document.createElement('div');
        el.className = 'day reveal';
        el.innerHTML =
          '<div class="dnum">' + String(i + 1).padStart(2, '0') + '</div>' +
          '<div class="day-body">' +
            '<h3>' + day.title + ' <span class="dtag">' + day.tag + '</span></h3>' +
            '<span class="dloc">' + day.loc + '</span>' +
            '<p>' + day.text + '</p>' +
            '<div class="evening">' + day.evening + '</div>' +
          '</div>';
        tl.appendChild(el);
      });
      pane.appendChild(tl);

      const rs = document.createElement('div');
      rs.className = 'route-stats stagger';
      rs.innerHTML =
        '<div class="route-stat"><b>' + d.stats.miles + '</b><span>nautical miles</span></div>' +
        '<div class="route-stat"><b>' + d.stats.crags + '</b><span>crags visited</span></div>' +
        '<div class="route-stat"><b>' + d.stats.climbingDays + '</b><span>climbing days</span></div>' +
        '<div class="route-stat"><b>' + d.stats.anchorages + '</b><span>anchorages</span></div>';
      pane.appendChild(rs);
      observeAll(pane);
    }

    keys.forEach((key, i) => {
      const b = document.createElement('button');
      b.className = 'tab' + (i === 0 ? ' active' : '');
      b.type = 'button';
      b.textContent = VST_ITINERARIES[key].label;
      b.addEventListener('click', () => {
        tabs.querySelectorAll('.tab').forEach((t) => t.classList.remove('active'));
        b.classList.add('active');
        renderDest(key);
      });
      tabs.appendChild(b);
    });

    itiRoot.appendChild(tabs);
    itiRoot.appendChild(pane);
    renderDest(keys[0]);
  }

  /* ---------- departures ---------- */
  const depRoot = document.getElementById('departures');
  if (depRoot && typeof VST_DEPARTURES !== 'undefined') {
    VST_DEPARTURES.forEach((d) => {
      const row = document.createElement('div');
      row.className = 'dep reveal' + (d.status === 'sold' ? ' soldout' : '');
      row.innerHTML =
        '<div class="dd">' + d.dates + '<small>' + d.year + '</small></div>' +
        '<div class="where"><b>' + d.dest + '</b><span>' + d.country + ' · ' + d.boat + '</span></div>' +
        '<span class="status ' + d.status + '">' + d.note + '</span>' +
        '<a class="btn btn-ghost" href="#request">request info</a>';
      depRoot.appendChild(row);
    });
    observeAll(depRoot);
  }

  /* ---------- forms (front-end only for now) ---------- */
  document.querySelectorAll('form[data-vst-form]').forEach((form) => {
    form.addEventListener('submit', (ev) => {
      ev.preventDefault();
      if (!form.reportValidity()) return;
      Array.from(form.children).forEach((c) => {
        if (!c.classList.contains('form-ok')) c.style.display = 'none';
      });
      const ok = form.querySelector('.form-ok');
      if (ok) ok.style.display = 'block';
      /* TODO: wire to CRM endpoint / Airtable webhook before production */
    });
  });

  /* ---------- FAQ: close others ---------- */
  const qas = document.querySelectorAll('.qa');
  qas.forEach((qa) => {
    qa.addEventListener('toggle', () => {
      if (qa.open) qas.forEach((o) => { if (o !== qa) o.open = false; });
    });
  });

  observeAll(document);
  onScroll();
})();
