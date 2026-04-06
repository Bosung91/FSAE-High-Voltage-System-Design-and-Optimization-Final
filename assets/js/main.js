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
  var path = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var href = a.getAttribute('href').replace(/\/$/, '') || '/';
    if (path === href || path.endsWith(href) && href !== '/') {
      a.classList.add('active');
    }
  });
})();

/* ============================================================
   Background Slideshow
   ============================================================ */
(function () {
  var slides = document.querySelectorAll('.bg-slide');
  if (!slides.length) return;
  var cur = 0;
  setInterval(function () {
    slides[cur].classList.remove('active');
    cur = (cur + 1) % slides.length;
    slides[cur].classList.add('active');
  }, 7000);
})();

/* ============================================================
   Search
   ============================================================ */
function doSearch(q) {
  var box = document.getElementById('searchResults');
  q = q.trim();
  if (q.length < 2) {
    box.classList.remove('open');
    box.innerHTML = '';
    return;
  }
  var ql = q.toLowerCase();
  var hits = (window.PAGES || []).filter(function (p) {
    return (p.title && p.title.toLowerCase().includes(ql)) ||
           (p.excerpt && p.excerpt.toLowerCase().includes(ql));
  }).slice(0, 8);

  if (!hits.length) {
    box.innerHTML = '<div class="sr-empty">No results found.</div>';
  } else {
    box.innerHTML = hits.map(function (p) {
      var snip = '';
      if (p.excerpt) {
        var idx = p.excerpt.toLowerCase().indexOf(ql);
        if (idx >= 0) {
          snip = '\u2026' + p.excerpt.substring(Math.max(0, idx - 35), idx + 90) + '\u2026';
        } else {
          snip = p.excerpt.substring(0, 110) + '\u2026';
        }
      }
      return '<a class="sr-item" href="' + p.url + '">' +
             '<strong>' + (p.title || 'Page') + '</strong>' +
             '<span>' + snip + '</span></a>';
    }).join('');
  }
  box.classList.add('open');
}

document.addEventListener('click', function (e) {
  if (!e.target.closest('.search-wrap')) {
    var box = document.getElementById('searchResults');
    if (box) { box.classList.remove('open'); }
  }
});
