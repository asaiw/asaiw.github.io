(function() {
  const root = document.documentElement;
  const THEME_KEY = 'preferred-theme';

  function setTheme(theme) {
    // theme: 'light' | 'dark' | 'system'
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem(THEME_KEY, theme); } catch (_) {}
    const btn = document.getElementById('theme-toggle');
    if (btn) {
      const pressed = theme === 'dark';
      btn.setAttribute('aria-pressed', String(pressed));
      btn.title = '切换主题 — 当前 ' + (theme === 'dark' ? '深色' : theme === 'light' ? '浅色' : '跟随系统');
    }
  }

  function initTheme() {
    let theme = 'system';
    try {
      const saved = localStorage.getItem(THEME_KEY);
      if (saved) theme = saved;
    } catch (_) {}
    setTheme(theme);
  }

  function toggleTheme() {
    const current = root.getAttribute('data-theme') || 'system';
    const next = current === 'dark' ? 'light' : current === 'light' ? 'system' : 'dark';
    setTheme(next);
  }

  function initThemeToggle() {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', toggleTheme);
    // Keyboard activation is handled by default button semantics
  }

  function initNavToggle() {
    const btn = document.getElementById('nav-toggle');
    const nav = document.getElementById('primary-nav');
    if (!btn || !nav) return;
    function setOpen(open) {
      nav.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', String(open));
    }
    btn.addEventListener('click', () => {
      setOpen(!nav.classList.contains('open'));
    });
    // Close after clicking a link (use event delegation)
    nav.addEventListener('click', (e) => {
      const a = e.target.closest('a');
      if (a) setOpen(false);
    });
  }

  function initSmoothScrollOffset() {
    // If smooth scroll disabled by reduced motion, do nothing
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;
    // Native CSS handles smooth scroll; ensure focus management for skip link
    const skip = document.querySelector('.skip-link');
    if (skip) {
      skip.addEventListener('click', function(e) {
        const target = document.getElementById('main-content');
        if (target) {
          target.setAttribute('tabindex', '-1');
          target.focus({ preventScroll: true });
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }
  }

  function initReveal() {
    const items = Array.from(document.querySelectorAll('.reveal'));
    if (!items.length) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      items.forEach(el => el.classList.add('in-view'));
      return;
    }
    const obs = new IntersectionObserver((entries, observer) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      }
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
    items.forEach(el => obs.observe(el));
  }

  function setYear() {
    const el = document.getElementById('year');
    if (el) el.textContent = String(new Date().getFullYear());
  }

  // Init
  initTheme();
  initThemeToggle();
  initNavToggle();
  initSmoothScrollOffset();
  initReveal();
  setYear();
})();
