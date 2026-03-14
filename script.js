/* ═══════════════════════════════════════════════════════════════
   ALTAN NEXUS — script.js  (Shared across all pages)
   Features: Preloader · Cursor · Nav · Reveal · Lang · Transitions
   ═══════════════════════════════════════════════════════════════ */

'use strict';

/* ─── TRANSLATIONS ─────────────────────────────────────────── */
const T = {
  en:{
    nav_home:'Home', nav_pf:'Portfolio', nav_contact:'Contact',
    idx_eye:'Architectural Vision Project',
    idx_sub:'Architecture Project',
    idx_cta:'Explore My Portfolio',
    idx_scroll:'Scroll',
    pf_hero_title:'Portfolio',
    pf_hero_desc:'A comprehensive architectural presentation across fifteen distinct fields of research, design, and technical development.',
    view_btn:'View Project',
    prev:'Previous', next:'Next',
    footer_sub:'Architectural Vision Project',
    footer_cr:'© 2024 Altan Nexus. All rights reserved.',
    footer_tag:'Architecture as Experience.',
    // Card titles
    c1:'Concept & Idea', c1d:'The conceptual origins and design philosophy underpinning the Altan Nexus vision.',
    c2:'Site & Context', c2d:'Analysis of the site conditions, topography, and surrounding urban context.',
    c3:'Orientation & Atrium', c3d:'Solar orientation strategies and the central atrium as a spatial and environmental device.',
    c4:'Urban Situation & Planning', c4d:'The project within the broader urban masterplan of Skopje and the Vardar corridor.',
    c5:'Architecture', c5d:'The full architectural proposition — form, programme, and spatial sequence.',
    c6:'Structure & Statics', c6d:'Structural system, load paths, and material strategy for the tower ensemble.',
    c7:'MEP & Electrical', c7d:'Mechanical, electrical, and plumbing systems integrated into the architectural design.',
    c8:'Technical Details', c8d:'Construction details, connection nodes, and bespoke technical solutions.',
    c9:'Design Strategy', c9d:'The overarching design methodology and strategic design decisions.',
    c10:'Renders', c10d:'Photorealistic visualisations of the completed project across all programmes.',
    c11:'Site Photography', c11d:'Documentary photography of the existing site and surroundings.',
    c12:'Videos', c12d:'Cinematic walkthroughs and process films for the Altan Nexus project.',
    c13:'QR Interactive Experience', c13d:'Augmented reality and mobile-accessible project exploration via QR codes.',
    c14:'City Context', c14d:'The relationship between Altan Nexus and the city of Skopje.',
    c15:'Final Poster Presentation', c15d:'The complete academic and professional presentation poster for the project.',
  },
  sq:{
    nav_home:'Kryefaqja', nav_pf:'Portfolio', nav_contact:'Kontakt',
    idx_eye:'Projekt Vizionar Arkitekturor',
    idx_sub:'Projekt Arkitekturor',
    idx_cta:'Eksploro Portfolion',
    idx_scroll:'Lëviz',
    pf_hero_title:'Portfolio',
    pf_hero_desc:'Një prezantim gjithëpërfshirës arkitekturor në pesëmbëdhjetë fusha të ndryshme të kërkimit, projektimit dhe zhvillimit teknik.',
    view_btn:'Shiko Projektin',
    prev:'I Mëparshmi', next:'I Ardhshmi',
    footer_sub:'Projekt Vizionar Arkitekturor',
    footer_cr:'© 2024 Altan Nexus. Të gjitha të drejtat e rezervuara.',
    footer_tag:'Arkitektura si Eksperiencë.',
    c1:'Koncepti & Ideja', c1d:'Origjina konceptuale dhe filozofia e projektimit që qëndron në themel të vizionit Altan Nexus.',
    c2:'Siti & Konteksti', c2d:'Analiza e kushteve të sitit, topografisë dhe kontekstit urban përreth.',
    c3:'Orientimi & Atriumi', c3d:'Strategjitë e orientimit solar dhe atriumi qendror si pajisje hapësinore dhe mjedisore.',
    c4:'Situata Urbane & Planifikimi', c4d:'Projekti brenda masterplanit urban më të gjerë të Shkupit dhe korridorit të Vardarit.',
    c5:'Arkitektura', c5d:'Propozimi i plotë arkitekturor — forma, programi dhe sekuenca hapësinore.',
    c6:'Struktura & Statika', c6d:'Sistemi strukturor, rrugët e ngarkesës dhe strategjia e materialeve.',
    c7:'MEP & Elektrik', c7d:'Sistemet mekanike, elektrike dhe hidraulike të integruara në projektimin arkitekturor.',
    c8:'Detajet Teknike', c8d:'Detajet e ndërtimit, nyjet e lidhjes dhe zgjidhjet teknike bespoke.',
    c9:'Strategjia e Dizajnit', c9d:'Metodologjia e përgjithshme e dizajnit dhe vendimet strategjike të projektimit.',
    c10:'Render', c10d:'Vizualizime fotorealiste të projektit të përfunduar nëpër të gjitha programet.',
    c11:'Fotografi Siti', c11d:'Fotografi dokumentare e sitit ekzistues dhe rrethinave.',
    c12:'Video', c12d:'Ecje kinematike dhe filma procesi për projektin Altan Nexus.',
    c13:'Eksperienca Interaktive QR', c13d:'Realitet i shtuar dhe eksplorim i projektit i aksesushëm nga celulari.',
    c14:'Konteksti i Qytetit', c14d:'Marrëdhënia midis Altan Nexus dhe qytetit të Shkupit.',
    c15:'Prezantimi Final Poster', c15d:'Posteri i plotë akademik dhe profesional i prezantimit për projektin.',
  },
  mk:{
    nav_home:'Почетна', nav_pf:'Портфолио', nav_contact:'Контакт',
    idx_eye:'Визионерски Архитектонски Проект',
    idx_sub:'Архитектонски Проект',
    idx_cta:'Истражи го Портфолиото',
    idx_scroll:'Скролај',
    pf_hero_title:'Портфолио',
    pf_hero_desc:'Сеопфатна архитектонска презентација во петнаесет различни области на истражување, проектирање и технички развој.',
    view_btn:'Погледни Проект',
    prev:'Претходно', next:'Следно',
    footer_sub:'Визионерски Архитектонски Проект',
    footer_cr:'© 2024 Алтан Нексус. Сите права задржани.',
    footer_tag:'Архитектурата како Искуство.',
    c1:'Концепт & Идеја', c1d:'Концептуалните корени и дизајн-филозофијата зад визијата на Алтан Нексус.',
    c2:'Локација & Контекст', c2d:'Анализа на условите на локацијата, топографијата и околниот урбан контекст.',
    c3:'Ориентација & Атриум', c3d:'Стратегии за сончева ориентација и централниот атриум.',
    c4:'Урбана Ситуација & Планирање', c4d:'Проектот во рамките на поширокиот урбан мастерплан на Скопје.',
    c5:'Архитектура', c5d:'Целосниот архитектонски предлог — форма, програма и просторна секвенца.',
    c6:'Структура & Статика', c6d:'Структурен систем, патишта на оптоварување и стратегија на материјали.',
    c7:'МЕП & Електрика', c7d:'Механички, електрични и водоводни системи интегрирани во архитектонскиот дизајн.',
    c8:'Технички Детали', c8d:'Детали за изградба, конекциски јазли и специфични технички решенија.',
    c9:'Стратегија на Дизајнот', c9d:'Сеопфатната методологија на дизајнот и стратешките дизајн-одлуки.',
    c10:'Рендери', c10d:'Фотореалистични визуелизации на завршениот проект.',
    c11:'Фотографии на Локацијата', c11d:'Документарна фотографија на постоечката локација.',
    c12:'Видеа', c12d:'Кинематски прошетки и процесни филмови за проектот Алтан Нексус.',
    c13:'QR Интерактивно Искуство', c13d:'Проширена реалност и мобилно истражување на проектот.',
    c14:'Градски Контекст', c14d:'Односот меѓу Алтан Нексус и градот Скопје.',
    c15:'Финален Постер', c15d:'Целосниот академски и професионален презентациски постер.',
  }
};

let lang = localStorage.getItem('an_lang') || 'en';

/* ── Apply translations ──────────────────────────────────────── */
function applyT(l) {
  lang = l;
  localStorage.setItem('an_lang', l);
  document.documentElement.lang = l;

  document.querySelectorAll('[data-t]').forEach(el => {
    const k = el.dataset.t;
    if (!T[l] || T[l][k] === undefined) return;
    const val = T[l][k];
    // Preserve SVG children
    const svgs = [...el.querySelectorAll('svg')];
    const tnodes = [...el.childNodes].filter(n => n.nodeType === 3);
    if (tnodes.length) { tnodes[0].textContent = val; }
    else if (el.tagName === 'SPAN' || el.childNodes.length === 0) { el.textContent = val; }
    else {
      el.textContent = val;
      svgs.forEach(s => el.appendChild(s));
    }
  });

  // Update active lang btn
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('on', b.dataset.lang === l);
  });
}

/* ── Preloader ───────────────────────────────────────────────── */
function initPreloader() {
  const p = document.getElementById('preloader');
  if (!p) return;
  const min = 1600, start = Date.now();
  window.addEventListener('load', () => {
    const wait = Math.max(0, min - (Date.now() - start));
    setTimeout(() => {
      p.classList.add('gone');
      // Trigger page-specific entry
      if (typeof onPageReady === 'function') onPageReady();
      else triggerReveals();
    }, wait);
  });
}

/* ── Custom Cursor ───────────────────────────────────────────── */
function initCursor() {
  const c = document.getElementById('cursor');
  const r = document.getElementById('cursor-ring');
  if (!c || !r || window.innerWidth <= 768) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    c.style.left = mx + 'px'; c.style.top = my + 'px';
  });

  (function raf() {
    rx += (mx - rx) * .1; ry += (my - ry) * .1;
    r.style.left = rx + 'px'; r.style.top = ry + 'px';
    requestAnimationFrame(raf);
  })();

  document.addEventListener('mouseleave', () => { c.style.opacity = 0; r.style.opacity = 0; });
  document.addEventListener('mouseenter', () => { c.style.opacity = 1; r.style.opacity = 1; });
}

/* ── Navbar ──────────────────────────────────────────────────── */
function initNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;
  let last = 0;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
    last = window.scrollY;
  }, { passive: true });

  // Hamburger
  const hbg = document.getElementById('hbg');
  const mob = document.getElementById('mobMenu');
  if (hbg && mob) {
    hbg.addEventListener('click', () => {
      const on = hbg.classList.toggle('on');
      mob.classList.toggle('on', on);
      document.body.style.overflow = on ? 'hidden' : '';
    });
    mob.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hbg.classList.remove('on');
        mob.classList.remove('on');
        document.body.style.overflow = '';
      });
    });
  }

  // Mark active link
  const page = document.body.dataset.page || '';
  document.querySelectorAll('.nav-links a, .mob-menu a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (page === 'index' && href.includes('index')) a.classList.add('active');
    if (page === 'portfolio' && href.includes('portfolio')) a.classList.add('active');
  });
}

/* ── Language switcher ───────────────────────────────────────── */
function initLang() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyT(btn.dataset.lang));
  });
  applyT(lang);
}

/* ── Scroll reveal (IntersectionObserver) ────────────────────── */
function triggerReveals() {
  const els = document.querySelectorAll('.rv,.rv-l,.rv-r,.rv-s');
  if (!els.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
  els.forEach(el => io.observe(el));
}

/* ── Page transition overlay ─────────────────────────────────── */
function initTransitions() {
  // Create overlay if not present
  if (!document.getElementById('page-veil')) {
    const veil = document.createElement('div');
    veil.id = 'page-veil';
    veil.style.cssText = `
      position:fixed;inset:0;background:var(--black);z-index:9000;
      opacity:0;pointer-events:none;
      transition:opacity .4s cubic-bezier(0.4,0,1,1);
    `;
    document.body.appendChild(veil);
  }
  const veil = document.getElementById('page-veil');

  // Fade in on load
  requestAnimationFrame(() => {
    veil.style.opacity = '0';
    veil.style.pointerEvents = 'none';
  });

  // Intercept all internal links
  document.addEventListener('click', e => {
    const a = e.target.closest('a');
    if (!a) return;
    const href = a.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto') || href.startsWith('tel') || href.startsWith('http')) return;
    if (a.target === '_blank') return;

    e.preventDefault();
    veil.style.opacity = '1';
    veil.style.pointerEvents = 'all';
    setTimeout(() => { window.location.href = href; }, 420);
  });
}

/* ── Parallax (hero bg) ──────────────────────────────────────── */
function initParallax() {
  const bg = document.getElementById('heroBg') || document.querySelector('.sp-hero .ph');
  if (!bg || window.innerWidth <= 768) return;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > window.innerHeight * 1.2) return;
    bg.style.transform = `translateY(${y * .3}px)`;
  }, { passive: true });
}

/* ── Stats counter ───────────────────────────────────────────── */
function initCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const io = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) return;
      io.disconnect();
      const target = parseInt(el.dataset.count, 10);
      const dur = 1800;
      const start = performance.now();
      (function tick(now) {
        const p = Math.min((now - start) / dur, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(ease * target).toLocaleString();
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = target.toLocaleString();
      })(start);
    }, { threshold: .5 });
    io.observe(el);
  });
}

/* ── Lightbox (used on renders / photos) ────────────────────── */
function initLightbox() {
  const items = document.querySelectorAll('[data-lb]');
  if (!items.length) return;

  const lb = document.createElement('div');
  lb.id = 'lb';
  lb.innerHTML = `
    <button class="lb-x" id="lbX">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M18 6L6 18M6 6l12 12"/>
      </svg>
    </button>
    <div class="lb-body" id="lbBody">
      <div class="ph lb-ph"><span class="ph-label" id="lbLbl"></span></div>
    </div>
    <div class="lb-nav-btns">
      <button class="btn-ghost" id="lbP">← Prev</button>
      <button class="btn-ghost" id="lbN">Next →</button>
    </div>
  `;
  lb.style.cssText = `
    position:fixed;inset:0;background:rgba(13,13,13,.97);z-index:2000;
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:24px;
    opacity:0;visibility:hidden;transition:opacity .4s ease,visibility .4s;
  `;
  document.body.appendChild(lb);

  const lbPh = lb.querySelector('.lb-ph');
  lbPh.style.cssText = 'max-width:min(1000px,90vw);aspect-ratio:16/9;position:relative;width:100%';
  const lbNav = lb.querySelector('.lb-nav-btns');
  lbNav.style.cssText = 'display:flex;gap:16px';

  let cur = 0;
  const labels = [...items].map(i => i.dataset.lb);

  function open(i) {
    cur = i;
    document.getElementById('lbLbl').textContent = labels[i];
    lb.style.opacity = '1'; lb.style.visibility = 'visible';
    document.body.style.overflow = 'hidden';
  }
  function close() {
    lb.style.opacity = '0'; lb.style.visibility = 'hidden';
    document.body.style.overflow = '';
  }
  function nav(d) { cur = (cur + d + items.length) % items.length; document.getElementById('lbLbl').textContent = labels[cur]; }

  items.forEach((it, i) => it.addEventListener('click', () => open(i)));
  document.getElementById('lbX').addEventListener('click', close);
  document.getElementById('lbP').addEventListener('click', () => nav(-1));
  document.getElementById('lbN').addEventListener('click', () => nav(1));
  lb.addEventListener('click', e => { if (e.target === lb) close(); });
  document.addEventListener('keydown', e => {
    if (lb.style.visibility !== 'visible') return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') nav(-1);
    if (e.key === 'ArrowRight') nav(1);
  });
}

/* ── Video placeholder click ─────────────────────────────────── */
function initVideos() {
  document.querySelectorAll('.vid-item').forEach(v => {
    v.addEventListener('click', () => {
      // Placeholder: in production replace with actual video src
      alert('Video: ' + (v.dataset.title || 'Altan Nexus Video'));
    });
  });
}

/* ── INIT ────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initCursor();
  initNav();
  initLang();
  initTransitions();
  initParallax();
  initCounters();
  initLightbox();
  initVideos();
  triggerReveals();
});
