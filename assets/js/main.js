/* ============================================================
   Theme
   ============================================================ */
(function () {
  var saved = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  var btn = document.getElementById('themeBtn');
  if (btn) btn.textContent = saved === 'dark' ? '☀️' : '🌙';
})();

function toggleTheme() {
  var cur = document.documentElement.getAttribute('data-theme');
  var next = cur === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  document.getElementById('themeBtn').textContent = next === 'dark' ? '☀️' : '🌙';
}

/* ============================================================
   Sidebar
   ============================================================ */
var isMobile = window.innerWidth < 769;
var sidebarOpen = !isMobile;        // open on desktop, closed on mobile

function applySidebar() {
  var sidebar  = document.getElementById('sidebar');
  var main     = document.getElementById('mainContent');
  var backdrop = document.getElementById('sidebarBackdrop');

  if (isMobile) {
    sidebar.classList.toggle('open',     sidebarOpen);
    sidebar.classList.remove('collapsed');
    backdrop.classList.toggle('show',    sidebarOpen);
    // mobile: main always full-width
    main.classList.add('full-width');
  } else {
    sidebar.classList.toggle('collapsed', !sidebarOpen);
    sidebar.classList.remove('open');
    backdrop.classList.remove('show');
    main.classList.toggle('full-width', !sidebarOpen);
  }
}

function toggleSidebar() {
  sidebarOpen = !sidebarOpen;
  localStorage.setItem('sidebar', sidebarOpen ? '1' : '0');
  applySidebar();
}

// Restore saved state on desktop
(function () {
  if (!isMobile) {
    var saved = localStorage.getItem('sidebar');
    if (saved !== null) sidebarOpen = saved === '1';
  }
  applySidebar();
})();

// Close sidebar when backdrop clicked (mobile)
document.getElementById('sidebarBackdrop').addEventListener('click', function () {
  sidebarOpen = false;
  applySidebar();
});

// Mark active nav link
(function () {
  var path = window.location.pathname.replace(/\/$/, '').replace(/\.html$/, '') || '/';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var href = a.getAttribute('href').replace(/\/$/, '').replace(/\.html$/, '') || '/';
    if (path === href || (path.endsWith(href) && href !== '/')) {
      a.classList.add('active');
    }
  });
})();

/* ============================================================
   Hero Slideshow
   ============================================================ */
(function () {
  var slides = document.querySelectorAll('.hero-slide');
  if (!slides.length) return;
  var cur = 0;
  setInterval(function () {
    slides[cur].classList.remove('active');
    cur = (cur + 1) % slides.length;
    slides[cur].classList.add('active');
  }, 7000);
})();

/* ============================================================
   Search — page index (hardcoded; avoids Jekyll circular deps)
   ============================================================ */
var BASE = '/FSAE-High-Voltage-System-Design-and-Optimization-Final';
var PAGES = [
  { title: 'Home',                   url: BASE + '/',                      desc: 'CDE4301 Final Report — FTS-433 FSAE High Voltage System Design and Optimization' },
  { title: 'List of Abbreviations',  url: BASE + '/list-of-abbrev',        desc: 'IMD, IR, BMS, ECU, FSAE, HV, LV, MSD, PDM, PCB, TB, TSMP, TSMS' },
  { title: 'Introduction',           url: BASE + '/introduction',          desc: 'NUS Formula SAE team, R26E, EDIC, 27 team members' },
  { title: 'Objective and Scope',    url: BASE + '/objective-and-scope',   desc: 'HV department goal, CM200DX, R25Evo, timeline, testbench, Precharge sequence' },
  { title: 'Context of Problem',     url: BASE + '/context-of-problem',    desc: 'Tractive system, BAMOCAR, CM200DX, peak current, acceleration' },
  { title: 'R25Evo',                 url: BASE + '/r25evo',                desc: 'Precharge resistor failure, burnt, heat sink, PCB connectors, signal oscillation' },
  { title: 'PCDC Optimization',      url: BASE + '/pcdc-optimization',     desc: 'Precharge-Discharge PCB, RC delay, PMOS, MOV, chassis mount resistor, 3.3kΩ, Hirose, Isolation Relay, KILOVAC EV200, Albright HV500, power dissipation, thermal' },
  { title: 'TB PDM Verification',    url: BASE + '/tb-pdm-verification',   desc: 'Tractive Battery PDM, Hirose DF63, voltage drop, reversed polarity, Shutdown Line LEDs, diagnostics' },
  { title: 'HV Distribution PCB',    url: BASE + '/hv-distribution-testing', desc: 'HV distribution, fuses, Littelfuse, AWG 22, Tefzel, continuity, IEC EV6.6.6' },
  { title: 'Shortcomings',           url: BASE + '/shortcomings',          desc: 'ESF model accuracy, temperature monitoring, SPICE simulation validation' },
  { title: 'Future Work',            url: BASE + '/future-work',           desc: 'R26E test run, ESF model refinement, thermistor, Hirose connectors' },
  { title: 'References',             url: BASE + '/references',            desc: 'Hirose, Littelfuse, PROWIREUSA, FTS 435 Cascadia, Kasemsadeh' },
  { title: 'Appendix',               url: BASE + '/appendix',              desc: 'R25Evo resistor calculations, thermal conductivity, Precharge logic, component calculations, power analysis' }
];

function doSearch(q) {
  var box = document.getElementById('searchResults');
  q = (q || '').trim();
  if (q.length < 2) { box.classList.remove('open'); box.innerHTML = ''; return; }
  var ql = q.toLowerCase();
  var hits = PAGES.filter(function (p) {
    return p.title.toLowerCase().includes(ql) || p.desc.toLowerCase().includes(ql);
  });
  if (!hits.length) {
    box.innerHTML = '<div class="sr-empty">No results found.</div>';
  } else {
    box.innerHTML = hits.map(function (p) {
      var idx = p.desc.toLowerCase().indexOf(ql);
      var snip = idx >= 0
        ? '\u2026' + p.desc.substring(Math.max(0, idx - 30), idx + 80) + '\u2026'
        : p.desc.substring(0, 100) + '\u2026';
      return '<a class="sr-item" href="' + p.url + '"><strong>' + p.title + '</strong><span>' + snip + '</span></a>';
    }).join('');
  }
  box.classList.add('open');
}

document.addEventListener('click', function (e) {
  if (!e.target.closest('.search-wrap')) {
    var box = document.getElementById('searchResults');
    if (box) box.classList.remove('open');
  }
});

/* ============================================================
   Word count
   ============================================================ */
(function () {
  var card = document.querySelector('.content-card');
  var bar  = document.getElementById('wcBar');
  if (!card || !bar) return;
  var text  = card.innerText || card.textContent || '';
  var count = text.trim().split(/\s+/).filter(function (w) { return w.length > 0; }).length;
  bar.textContent = count.toLocaleString() + ' words';
})();
