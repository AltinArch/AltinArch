/* ═══════════════════════════════════════════════════════════════
   ALTAN NEXUS — script.js
   Vanilla JS: Preloader · Cursor · Nav · Scroll Animations ·
               Language Switcher · Gallery Lightbox · Stats Counter
   ═══════════════════════════════════════════════════════════════ */

'use strict';

/* ─────────────────────────── TRANSLATION DICTIONARY */
const TRANSLATIONS = {

  en: {
    brand:        'ALTAN NEXUS',
    nav_home:     'Home',
    nav_vision:   'Vision',
    nav_master:   'Masterplan',
    nav_arch:     'Architecture',
    nav_int:      'Interior',
    nav_dig:      'Digital',
    nav_land:     'Landscape',
    nav_3d:       '3D Experience',
    nav_contact:  'Contact',

    hero_eyebrow: 'Architectural Vision Project',
    hero_sub:     'A convergence of culture, technology,\nand the living city.',
    hero_cta:     'Explore the Project',
    scroll:       'Scroll',

    vis_title:    'A New Urban Horizon',
    vis_lead:     'ALTAN NEXUS is conceived as a living landmark — a vertical city within the city, where architecture breathes alongside its inhabitants.',
    vis_body:     'Rising at the confluence of the Vardar River and the historic urban fabric, Altan Nexus redefines what a mixed-use development can be. It is not simply a building — it is a manifesto for the 21st-century city: porous, social, sustainable, and deeply rooted in its cultural context.',
    vis_body2:    'Every gesture — from the sweeping riverfront promenade to the sky gardens suspended between towers — is designed to blur the boundary between the public realm and private life.',
    vis_caption:  'Conceptual perspective — Altan Nexus, 2024',

    stat1: 'Total Area',
    stat2: 'Floors',
    stat3: 'Programmes',
    stat4: 'Completion',

    mp_title:  'The Masterplan',
    mp_intro:  'A choreography of towers, plazas, and riverfront terraces woven into the existing urban grain.',
    mp_c1:     'Site Organisation',
    mp_c1d:    'A north–south spine connects the riverfront promenade to the city centre.',
    mp_c2:     'Programme Mix',
    mp_c2d:    'Residential, commercial, cultural, hospitality, and landscape zones.',
    mp_c3:     'Vertical Connectivity',
    mp_c3d:    'Sky bridges and sky gardens link the towers at multiple levels.',

    arch_title:  'Architectural Language',
    arch_intro:  'The facades respond to climate, light, and the human scale — articulated through layered fins, woven screens, and deep loggias.',
    arch_g1: 'North Tower — Facade Study',
    arch_g2: 'Aerial Perspective',
    arch_g3: 'Street-Level Promenade',
    arch_g4: 'Sky Bridge at Level 22',
    arch_g5: 'Tower Crown — Dusk',
    arch_g6: 'Podium & Public Plaza',

    int_title:  'Interior Spaces',
    int_intro:  'Interiors are conceived as extensions of the landscape — warm, layered, and attuned to natural light.',
    int_body:   'Materials are sourced locally: Macedonian stone, oak, and raw concrete are balanced with hand-crafted textiles and bespoke lighting.',
    int_l1: 'Residential Lobbies',
    int_l2: 'Sky Lounge — Level 30',
    int_l3: 'Cultural Atrium',
    int_l4: 'Riverfront Restaurant',
    int_l5: 'Wellness & Spa',

    dig_title:   'Digital Experience',
    dig_intro:   'Altan Nexus extends beyond the physical — an immersive digital platform lets visitors explore every corner of the project before a single brick is laid.',
    dig_body:    'Using real-time 3D rendering, photogrammetry, and spatial audio, the digital twin of Altan Nexus offers an unprecedented level of presence.',
    dig_screen:  'Interactive 3D Platform',
    dig_screen2: 'Coming Soon',
    tag1: 'Real-Time 3D',
    tag2: 'WebGL Viewer',
    tag3: 'Mobile AR',
    tag4: 'Spatial Audio',
    tag5: 'VR Ready',

    land_title: 'Landscape & Riverfront',
    land_sub:   'Where the city meets the river — a living edge.',
    land_c1:    'The Vardar Connection',
    land_c1d:   'The entire riverfront is activated with terraces, markets, cultural pavilions, and a continuous pedestrian promenade stretching 400 metres along the water\'s edge.',
    land_c2:    'Ecology & Biodiversity',
    land_c2d:   'Native riparian planting, pollinator gardens, and constructed wetlands return ecological function to an historically degraded riverbank.',
    land_c3:    'Sky Gardens',
    land_c3d:   'Suspended between the towers, the sky gardens bring the landscape vertically through the building — connecting residents with nature at height.',

    '3d_title':  'Interactive 3D Viewer',
    '3d_intro':  'Explore the full spatial experience of Altan Nexus in real time.',
    '3d_label':  '3D Viewer',
    '3d_sub':    'WebGL experience loading soon',
    '3d_note':   'Place your WebGL / Three.js / Spline embed here',
    ctrl1: 'Orbit',
    ctrl2: 'Zoom',
    ctrl3: 'Pan',
    ctrl4: 'Fullscreen',

    qr_title:  'QR Experience',
    qr_intro:  'Point your phone at any QR code in the exhibition to unlock an augmented-reality layer of the building.',
    qr_body:   'Walk through the physical model while the digital twin overlays structural information, material specs, and environmental performance data — all in real time.',
    qr_s1:     'Open your camera app',
    qr_s2:     'Scan any project QR code',
    qr_s3:     'Explore in augmented reality',
    qr_scan:   'Scan to Explore',

    con_title:  'Project Information',
    con_intro:  'Inquiries regarding the Altan Nexus project are welcome. We are open to collaboration, press, and investment dialogue.',
    con_c1:     'Project Office',
    con_c2:     'Enquiries',
    con_c3:     'Project Team',
    con_c3d:    'Lead Architect · Structural · Landscape · Digital',

    footer_sub: 'Architectural Vision Project',
    footer_cr:  '© 2024 Altan Nexus. All rights reserved.',
    footer_tag: 'Architecture as Experience.',
  },

  /* ─── Albanian */
  sq: {
    brand:        'ALTAN NEXUS',
    nav_home:     'Kryefaqja',
    nav_vision:   'Vizioni',
    nav_master:   'Masterplani',
    nav_arch:     'Arkitektura',
    nav_int:      'Brendësia',
    nav_dig:      'Dixhital',
    nav_land:     'Peizazhi',
    nav_3d:       'Eksperienca 3D',
    nav_contact:  'Kontakti',

    hero_eyebrow: 'Projekt Vizionar Arkitekturor',
    hero_sub:     'Një bashkim i kulturës, teknologjisë\ndhe qytetit të gjallë.',
    hero_cta:     'Eksploro Projektin',
    scroll:       'Lëviz',

    vis_title:    'Një Horizont i Ri Urban',
    vis_lead:     'ALTAN NEXUS është konceptuar si një monument i gjallë — një qytet vertikal brenda qytetit, ku arkitektura merr frymë bashkë me banorët e saj.',
    vis_body:     'Duke u ngritur në pikëtakimin e lumit Vardar me strukturën historike urbane, Altan Nexus ridefinon çfarë mund të jetë një zhvillim i përzier. Nuk është thjesht një ndërtesë — është një manifest për qytetin e shekullit të 21-të.',
    vis_body2:    'Çdo gjest — nga promenada e gjerë e bregut të lumit tek kopshtet qiellore — është projektuar për të fshirë kufirin midis sferës publike dhe jetës private.',
    vis_caption:  'Perspektivë konceptuale — Altan Nexus, 2024',

    stat1: 'Sipërfaqja Totale',
    stat2: 'Kate',
    stat3: 'Programme',
    stat4: 'Përfundimi',

    mp_title:  'Masterplani',
    mp_intro:  'Një koreografi kullash, sheshesh dhe terasash bregdetare të thurura në strukturën urbane ekzistuese.',
    mp_c1:     'Organizimi i Sitit',
    mp_c1d:    'Një bosht veri-jug lidh promenadën bregdetare me qendrën e qytetit.',
    mp_c2:     'Përzierja e Programeve',
    mp_c2d:    'Zona rezidenciale, tregtare, kulturore, hoteleri dhe peizazhi.',
    mp_c3:     'Lidhja Vertikale',
    mp_c3d:    'Urat qiellore dhe kopshtet qiellore lidhin kullat në nivele të shumta.',

    arch_title:  'Gjuha Arkitekturore',
    arch_intro:  'Fasadat i përgjigjen klimës, dritës dhe shkallës njerëzore — të artikuluara nëpërmjet rebreve të shtresuara dhe logjeve të thella.',
    arch_g1: 'Kulla Veriore — Studim i Fasadës',
    arch_g2: 'Perspektivë Ajrore',
    arch_g3: 'Promenada në Nivelin e Rrugës',
    arch_g4: 'Ura Qiellore në Katin 22',
    arch_g5: 'Kurora e Kullës — Muzg',
    arch_g6: 'Baza dhe Sheshi Publik',

    int_title:  'Hapësirat e Brendshme',
    int_intro:  'Brendësia konceptohet si vazhdim i peizazhit — e ngrohtë, e shtresuar dhe e harmonizuar me dritën natyrore.',
    int_body:   'Materialet burojnë lokalisht: guri maqedonas, ahu dhe betoni i papërpunuar janë balancuar me tekstile të punuara me dorë.',
    int_l1: 'Hallet e Rezidencës',
    int_l2: 'Salloni Qiellor — Kati 30',
    int_l3: 'Atriumi Kulturor',
    int_l4: 'Restoranti i Bregdetit',
    int_l5: 'Mirëqenia & Spa',

    dig_title:   'Eksperienca Dixhitale',
    dig_intro:   'Altan Nexus shkon përtej fizikes — një platformë dixhitale imersive u lejon vizitorëve të eksplorojnë çdo cep të projektit.',
    dig_body:    'Duke përdorur renderimin 3D në kohë reale, fotogrametrinë dhe audion hapësinore, binjakun dixhital të Altan Nexus.',
    dig_screen:  'Platforma Interaktive 3D',
    dig_screen2: 'Së Shpejti',
    tag1: '3D në Kohë Reale',
    tag2: 'Shikues WebGL',
    tag3: 'AR Celular',
    tag4: 'Audio Hapësinore',
    tag5: 'Gati për VR',

    land_title: 'Peizazhi & Bregu i Lumit',
    land_sub:   'Ku qyteti takon lumin — një buzë e gjallë.',
    land_c1:    'Lidhja me Vardar',
    land_c1d:   'I gjithë bregu i lumit aktivizohet me terasa, tregje, pavione kulturore dhe promenadë të vazhdueshme këmbësore prej 400 metrash.',
    land_c2:    'Ekologjia & Biodiversiteti',
    land_c2d:   'Mbjellja vendase bregdetare, kopshtet e polinator dhe ligatinat e ndërtuara restaurojnë funksionin ekologjik.',
    land_c3:    'Kopshtet Qiellore',
    land_c3d:   'Të pezulluara midis kullash, kopshtet qiellore sjellin peizazhin vertikalisht përmes ndërtesës.',

    '3d_title':  'Shikuesi Interaktiv 3D',
    '3d_intro':  'Eksploroni eksperiencën e plotë hapësinore të Altan Nexus në kohë reale.',
    '3d_label':  'Shikues 3D',
    '3d_sub':    'Eksperienca WebGL duke u ngarkuar së shpejti',
    '3d_note':   'Vendosni integrimin tuaj WebGL / Three.js / Spline këtu',
    ctrl1: 'Rrotullim',
    ctrl2: 'Zmadho',
    ctrl3: 'Lëviz',
    ctrl4: 'Ekran i Plotë',

    qr_title:  'Eksperienca QR',
    qr_intro:  'Drejtojeni telefonin tuaj drejt çdo kodi QR në ekspozitë për të zhbllokuar shtresën e realitetit të shtuar.',
    qr_body:   'Ecni nëpër modelin fizik ndërkohë që binjakun dixhital mbivendos informacionin strukturor dhe të dhënat e performancës mjedisore.',
    qr_s1:     'Hapni aplikacionin e kamerës',
    qr_s2:     'Skanoni çdo kod QR të projektit',
    qr_s3:     'Eksploroni në realitet të shtuar',
    qr_scan:   'Skanoni për të Eksploruar',

    con_title:  'Informacion mbi Projektin',
    con_intro:  'Pyetjet lidhur me projektin Altan Nexus janë të mirëpritura. Jemi të hapur për bashkëpunim, media dhe dialog investimi.',
    con_c1:     'Zyra e Projektit',
    con_c2:     'Kontakti',
    con_c3:     'Ekipi i Projektit',
    con_c3d:    'Arkitekt Kryesor · Strukturë · Peizazh · Dixhital',

    footer_sub: 'Projekt Vizionar Arkitekturor',
    footer_cr:  '© 2024 Altan Nexus. Të gjitha të drejtat e rezervuara.',
    footer_tag: 'Arkitektura si Eksperiencë.',
  },

  /* ─── Macedonian */
  mk: {
    brand:        'АЛТАН НЕКСУС',
    nav_home:     'Почетна',
    nav_vision:   'Визија',
    nav_master:   'Мастерплан',
    nav_arch:     'Архитектура',
    nav_int:      'Ентериер',
    nav_dig:      'Дигитален',
    nav_land:     'Пејзаж',
    nav_3d:       '3Д Искуство',
    nav_contact:  'Контакт',

    hero_eyebrow: 'Визионерски Архитектонски Проект',
    hero_sub:     'Конвергенција на култура, технологија\nи живиот град.',
    hero_cta:     'Истражи го Проектот',
    scroll:       'Скролај',

    vis_title:    'Нов Урбан Хоризонт',
    vis_lead:     'АЛТАН НЕКСУС е замислен како жив белег — вертикален град во градот, каде архитектурата дише заедно со своите жители.',
    vis_body:     'Издигнувајќи се на сливот на реката Вардар и историјата урбаното ткиво, Алтан Нексус ја редефинира функцијата на мешовитиот развој. Тоа не е само зграда — тоа е манифест за градот на 21-от век.',
    vis_body2:    'Секој потег — од широкиот брегален булевар до висечките небесни градини — е проектиран за да ја избрише границата меѓу јавниот простор и приватниот живот.',
    vis_caption:  'Концептуална перспектива — Алтан Нексус, 2024',

    stat1: 'Вкупна Површина',
    stat2: 'Катови',
    stat3: 'Програми',
    stat4: 'Завршување',

    mp_title:  'Мастерпланот',
    mp_intro:  'Кореографија на кули, плоштади и речни тераси вткаени во постојното урбано ткиво.',
    mp_c1:     'Организација на Локацијата',
    mp_c1d:    'Оска север–југ го поврзува крајбрежниот булевар со центарот на градот.',
    mp_c2:     'Мешавина на Програми',
    mp_c2d:    'Резиденцијални, комерцијални, културни, хотелски и пејзажни зони.',
    mp_c3:     'Вертикална Поврзаност',
    mp_c3d:    'Небесни мостови и небесни градини ги поврзуваат кулите на повеќе нивоа.',

    arch_title:  'Архитектонски Јазик',
    arch_intro:  'Фасадите одговараат на климата, светлината и човечката скала — артикулирани преку наслоени ребра и длабоки лоѓи.',
    arch_g1: 'Северна Кула — Студија на Фасада',
    arch_g2: 'Воздушна Перспектива',
    arch_g3: 'Крајбрежна Прошеталиште',
    arch_g4: 'Небесен Мост на 22 Кат',
    arch_g5: 'Крона на Кулата — Зајдисонце',
    arch_g6: 'Подиум и Јавен Плоштад',

    int_title:  'Ентериерни Простори',
    int_intro:  'Ентериерите се замислени како продолжение на пејзажот — топли, наслоени и усогласени со природната светлина.',
    int_body:   'Материјалите се локален извор: македонски камен, даб и суров бетон урамнотежени со рачно изработени текстили.',
    int_l1: 'Резиденцијални Холови',
    int_l2: 'Небесен Лаунџ — 30 Кат',
    int_l3: 'Културен Атриум',
    int_l4: 'Ресторан на Брегот',
    int_l5: 'Велнес & Спа',

    dig_title:   'Дигитално Искуство',
    dig_intro:   'Алтан Нексус се протега надвор од физичкото — имерзивна дигитална платформа им овозможува на посетителите да го истражат секој агол на проектот.',
    dig_body:    'Користејќи рендерирање во реално 3Д, фотограметрија и просторен звук, дигиталниот близнак на Алтан Нексус нуди извонредно присуство.',
    dig_screen:  'Интерактивна 3Д Платформа',
    dig_screen2: 'Наскоро',
    tag1: 'Реално 3Д',
    tag2: 'WebGL Прегледувач',
    tag3: 'Мобилен AR',
    tag4: 'Просторен Звук',
    tag5: 'VR Подготвен',

    land_title: 'Пејзаж & Крајбрежје',
    land_sub:   'Каде градот се среќава со реката — жив раб.',
    land_c1:    'Врската со Вардар',
    land_c1d:   'Целиот речен брег е активиран со тераси, пазари, културни павиљони и непрекинато пешачко прошеталиште од 400 метри.',
    land_c2:    'Екологија & Биодиверзитет',
    land_c2d:   'Автохтони крајречни насади, градини за опрашувачи и изградени мочуришта го враќаат еколошкото функционирање.',
    land_c3:    'Небесни Градини',
    land_c3d:   'Суспендирани меѓу кулите, небесните градини го носат пејзажот вертикално низ зградата.',

    '3d_title':  'Интерактивен 3Д Прегледувач',
    '3d_intro':  'Истражете го целосното просторно искуство на Алтан Нексус во реално време.',
    '3d_label':  '3Д Прегледувач',
    '3d_sub':    'WebGL искуство наскоро',
    '3d_note':   'Поставете го вашиот WebGL / Three.js / Spline embed тука',
    ctrl1: 'Ротација',
    ctrl2: 'Зумирање',
    ctrl3: 'Поместување',
    ctrl4: 'Цел Екран',

    qr_title:  'QR Искуство',
    qr_intro:  'Насочете го вашиот телефон кон кој било QR код на изложбата за да го отклучите слојот на проширена реалност.',
    qr_body:   'Прошетајте низ физичкиот модел додека дигиталниот близнак ги прикажува структурните информации и еколошките податоци — во реално време.',
    qr_s1:     'Отворете ја апликацијата за камера',
    qr_s2:     'Скенирајте кој било QR код на проектот',
    qr_s3:     'Истражете во проширена реалност',
    qr_scan:   'Скенирај за Истражување',

    con_title:  'Информации за Проектот',
    con_intro:  'Прашањата во врска со проектот Алтан Нексус се добредојдени. Отворени сме за соработка, медиуми и инвестициски дијалог.',
    con_c1:     'Канцеларија на Проектот',
    con_c2:     'Контакт',
    con_c3:     'Тим на Проектот',
    con_c3d:    'Главен Архитект · Конструкција · Пејзаж · Дигитален',

    footer_sub: 'Визионерски Архитектонски Проект',
    footer_cr:  '© 2024 Алтан Нексус. Сите права задржани.',
    footer_tag: 'Архитектурата како Искуство.',
  }
};

/* ═══════════════════════════════════════════════════════════════
   MAIN INIT
   ═══════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initCursor();
  initNavbar();
  initHamburger();
  initLanguageSwitcher();
  initScrollAnimations();
  initStatsCounter();
  initGalleryLightbox();
  initParallax();
  initActiveNavLink();
});

/* ─────────────────────────── PRELOADER */
function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  // Minimum display time so animation completes
  const minTime = 1800;
  const startTime = Date.now();

  window.addEventListener('load', () => {
    const elapsed = Date.now() - startTime;
    const remaining = Math.max(0, minTime - elapsed);
    setTimeout(() => {
      preloader.classList.add('hidden');
      // Trigger hero reveal animations
      triggerHeroReveal();
    }, remaining);
  });
}

function triggerHeroReveal() {
  const heroEls = document.querySelectorAll('.hero .reveal-up');
  heroEls.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('revealed');
    }, i * 140);
  });
}

/* ─────────────────────────── CUSTOM CURSOR */
function initCursor() {
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursor-follower');
  if (!cursor || !follower) return;

  // Only on desktop
  if (window.innerWidth <= 768) return;

  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top  = mouseY + 'px';
  });

  // Smooth follower via rAF
  (function animateFollower() {
    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;
    follower.style.left = followerX + 'px';
    follower.style.top  = followerY + 'px';
    requestAnimationFrame(animateFollower);
  })();

  // Hide when leaving window
  document.addEventListener('mouseleave', () => {
    cursor.style.opacity   = '0';
    follower.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    cursor.style.opacity   = '1';
    follower.style.opacity = '1';
  });
}

/* ─────────────────────────── NAVBAR */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* ─────────────────────────── HAMBURGER / MOBILE MENU */
function initHamburger() {
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ─────────────────────────── LANGUAGE SWITCHER */
let currentLang = 'en';

function initLanguageSwitcher() {
  const btns = document.querySelectorAll('.lang-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang === currentLang) return;
      currentLang = lang;

      // Update active state
      btns.forEach(b => b.classList.toggle('active', b.dataset.lang === lang));

      // Update html lang attribute
      document.documentElement.setAttribute('lang', lang);

      // Apply translations
      applyTranslations(lang);
    });
  });
}

function applyTranslations(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) {
      // Preserve child elements (e.g. SVG in buttons)
      const firstText = el.childNodes[0];
      if (firstText && firstText.nodeType === Node.TEXT_NODE) {
        firstText.textContent = dict[key];
      } else if (el.tagName === 'SPAN' || el.tagName === 'P' || el.tagName === 'H1' || el.tagName === 'H2' || el.tagName === 'H3' || el.tagName === 'H4') {
        el.textContent = dict[key];
      } else {
        // For anchors with SVG children, update only text node
        const textNode = Array.from(el.childNodes).find(n => n.nodeType === Node.TEXT_NODE);
        if (textNode) {
          textNode.textContent = dict[key];
        } else {
          // Fallback: replace but keep existing SVG child intact
          const svgChildren = Array.from(el.querySelectorAll('svg'));
          el.textContent = dict[key];
          svgChildren.forEach(svg => el.appendChild(svg));
        }
      }
    }
  });
}

/* ─────────────────────────── SCROLL ANIMATIONS (Intersection Observer) */
function initScrollAnimations() {
  const targets = document.querySelectorAll(
    '.reveal-up, .reveal-left, .reveal-right, .reveal-scale'
  );

  if (!targets.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
  });

  targets.forEach(el => observer.observe(el));
}

/* ─────────────────────────── STATS COUNTER */
function initStatsCounter() {
  const stats = document.querySelectorAll('.stat-num[data-target]');
  if (!stats.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  stats.forEach(el => observer.observe(el));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1800;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed  = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(ease * target).toLocaleString();
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target.toLocaleString();
  }

  requestAnimationFrame(update);
}

/* ─────────────────────────── GALLERY LIGHTBOX */
const galleryData = [
  'Facade Detail',
  'Aerial View',
  'Street Level',
  'Sky Bridge',
  'Tower Crown',
  'Podium',
];

let currentLbIndex = 0;

function initGalleryLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lbClose  = document.getElementById('lbClose');
  const lbPrev   = document.getElementById('lbPrev');
  const lbNext   = document.getElementById('lbNext');
  const lbLabel  = document.getElementById('lbLabel');
  const items    = document.querySelectorAll('.gallery-item');

  if (!lightbox) return;

  // Open on item click
  items.forEach((item, i) => {
    item.addEventListener('click', () => {
      currentLbIndex = i;
      openLightbox(currentLbIndex);
    });
  });

  function openLightbox(index) {
    currentLbIndex = index;
    lbLabel.textContent = galleryData[index] || '';
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  function navigate(dir) {
    currentLbIndex = (currentLbIndex + dir + galleryData.length) % galleryData.length;
    lbLabel.textContent = galleryData[currentLbIndex];
  }

  lbClose.addEventListener('click', closeLightbox);
  lbPrev.addEventListener('click',  () => navigate(-1));
  lbNext.addEventListener('click',  () => navigate(1));

  // Close on backdrop
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard
  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
  });

  // Touch swipe
  let touchStartX = 0;
  lightbox.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  lightbox.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 50) navigate(diff > 0 ? 1 : -1);
  });
}

/* ─────────────────────────── PARALLAX HERO */
function initParallax() {
  const heroBg = document.getElementById('heroBg');
  if (!heroBg) return;

  // Only on large screens
  if (window.innerWidth <= 768) return;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const maxScroll = window.innerHeight;
    if (scrollY > maxScroll) return;
    const offset = scrollY * 0.35;
    heroBg.style.transform = `translateY(${offset}px)`;
  }, { passive: true });
}

/* ─────────────────────────── ACTIVE NAV LINK (Scroll Spy) */
function initActiveNavLink() {
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${id}`
          );
        });
      }
    });
  }, {
    threshold: 0.3,
    rootMargin: '-80px 0px -40% 0px'
  });

  sections.forEach(section => observer.observe(section));
}

/* ─────────────────────────── SMOOTH SCROLL (fallback for older browsers) */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (!target) return;

    // CSS scroll-behavior handles it, but this is the fallback
    if (!CSS.supports('scroll-behavior', 'smooth')) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ─────────────────────────── UTILITY: throttle */
function throttle(fn, delay) {
  let last = 0;
  return function(...args) {
    const now = Date.now();
    if (now - last >= delay) {
      last = now;
      fn.apply(this, args);
    }
  };
}
