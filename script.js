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

  // Blog functionality
  const blogPosts = [
    {
      id: 1,
      title: '构建高性能的现代 Web 应用',
      excerpt: '探索如何使用最新的 Web 技术栈构建快速、可扩展的应用程序。从前端优化到后端架构设计，本文将带你深入了解现代 Web 开发的最佳实践。',
      date: '2024-03-15',
      readingTime: 8,
      tags: ['性能优化', '架构设计', 'Web开发'],
      image: 'assets/project-placeholder-1.svg'
    },
    {
      id: 2,
      title: 'TypeScript 高级类型系统详解',
      excerpt: '深入理解 TypeScript 的类型系统，包括泛型、条件类型、映射类型等高级特性。通过实际案例学习如何编写类型安全且可维护的代码。',
      date: '2024-03-10',
      readingTime: 12,
      tags: ['TypeScript', '前端开发'],
      image: 'assets/project-placeholder-2.svg'
    },
    {
      id: 3,
      title: 'Docker 和 Kubernetes 实战指南',
      excerpt: '从零开始学习容器化技术，了解 Docker 的核心概念和 Kubernetes 的编排能力。本文将指导你完成从开发到生产的完整部署流程。',
      date: '2024-03-05',
      readingTime: 15,
      tags: ['DevOps', 'Docker', 'Kubernetes'],
      image: 'assets/project-placeholder-3.svg'
    },
    {
      id: 4,
      title: 'React 18 新特性深度解析',
      excerpt: 'React 18 带来了并发渲染、自动批处理等重要更新。本文将详细介绍这些新特性的工作原理以及如何在实际项目中应用它们。',
      date: '2024-02-28',
      readingTime: 10,
      tags: ['React', '前端开发'],
      image: 'assets/project-placeholder-4.svg'
    },
    {
      id: 5,
      title: '微服务架构设计模式',
      excerpt: '了解微服务架构的核心设计模式，包括 API 网关、服务发现、熔断器等。通过实际案例学习如何设计和实现可靠的分布式系统。',
      date: '2024-02-20',
      readingTime: 14,
      tags: ['架构设计', '微服务', '后端开发'],
      image: 'assets/project-placeholder-5.svg'
    },
    {
      id: 6,
      title: 'GraphQL vs REST：如何选择',
      excerpt: '比较 GraphQL 和 REST API 的优缺点，帮助你在实际项目中做出正确的技术选型。包括性能对比、开发体验和最佳实践。',
      date: '2024-02-15',
      readingTime: 9,
      tags: ['API设计', '后端开发'],
      image: 'assets/project-placeholder-6.svg'
    },
    {
      id: 7,
      title: 'CSS Grid 和 Flexbox 实战布局',
      excerpt: '掌握现代 CSS 布局技术，学习如何使用 Grid 和 Flexbox 创建复杂的响应式布局。包含大量实用示例和最佳实践。',
      date: '2024-02-10',
      readingTime: 7,
      tags: ['CSS', '前端开发'],
      image: 'assets/project-placeholder-1.svg'
    },
    {
      id: 8,
      title: 'Node.js 性能优化实践',
      excerpt: '提升 Node.js 应用性能的实用技巧，包括异步编程、内存管理、缓存策略等。通过性能监控和分析工具找出并解决性能瓶颈。',
      date: '2024-02-05',
      readingTime: 11,
      tags: ['Node.js', '性能优化', '后端开发'],
      image: 'assets/project-placeholder-2.svg'
    },
    {
      id: 9,
      title: 'Web 安全最佳实践',
      excerpt: '了解常见的 Web 安全威胁和防御措施，包括 XSS、CSRF、SQL 注入等。学习如何构建安全的 Web 应用，保护用户数据。',
      date: '2024-01-30',
      readingTime: 13,
      tags: ['安全', 'Web开发'],
      image: 'assets/project-placeholder-3.svg'
    }
  ];

  let currentPage = 1;
  let postsPerPage = 6;
  let filteredPosts = [...blogPosts];
  let currentTag = 'all';
  let searchQuery = '';

  function getAllTags() {
    const tagsSet = new Set();
    blogPosts.forEach(post => {
      post.tags.forEach(tag => tagsSet.add(tag));
    });
    return Array.from(tagsSet).sort();
  }

  function renderTagFilters() {
    const container = document.getElementById('filter-tags');
    if (!container) return;

    const tags = getAllTags();
    let html = '<button class="tag-filter active" data-tag="all">全部</button>';
    tags.forEach(tag => {
      html += `<button class="tag-filter" data-tag="${tag}">${tag}</button>`;
    });
    container.innerHTML = html;

    // Add event listeners
    container.querySelectorAll('.tag-filter').forEach(btn => {
      btn.addEventListener('click', (e) => {
        currentTag = e.target.dataset.tag;
        currentPage = 1;
        container.querySelectorAll('.tag-filter').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        filterAndRenderPosts();
      });
    });
  }

  function filterPosts() {
    filteredPosts = blogPosts.filter(post => {
      const matchesTag = currentTag === 'all' || post.tags.includes(currentTag);
      const matchesSearch = searchQuery === '' || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesTag && matchesSearch;
    });
  }

  function renderBlogPosts() {
    const container = document.getElementById('blog-posts');
    if (!container) return;

    const startIdx = (currentPage - 1) * postsPerPage;
    const endIdx = startIdx + postsPerPage;
    const postsToShow = filteredPosts.slice(startIdx, endIdx);

    if (postsToShow.length === 0) {
      container.innerHTML = `
        <div class="blog-empty">
          <div class="blog-empty-icon">📝</div>
          <p>没有找到相关文章</p>
        </div>
      `;
      return;
    }

    let html = '';
    postsToShow.forEach(post => {
      const tagsHtml = post.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('');
      html += `
        <article class="blog-card reveal">
          <img src="${post.image}" alt="${post.title}" class="blog-card-image" loading="lazy">
          <div class="blog-card-body">
            <div class="blog-card-meta">
              <span class="blog-card-date">📅 ${post.date}</span>
              <span class="blog-card-reading-time">⏱️ ${post.readingTime} 分钟</span>
            </div>
            <h3><a href="#blog-post-${post.id}">${post.title}</a></h3>
            <p class="blog-card-excerpt">${post.excerpt}</p>
            <div class="blog-card-tags">${tagsHtml}</div>
            <div class="blog-card-footer">
              <a href="#blog-post-${post.id}" class="read-more">阅读全文 →</a>
            </div>
          </div>
        </article>
      `;
    });

    container.innerHTML = html;
    initReveal(); // Re-initialize reveal animation for new posts
  }

  function renderPagination() {
    const container = document.getElementById('blog-pagination');
    if (!container) return;

    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    if (totalPages <= 1) {
      container.innerHTML = '';
      return;
    }

    let html = `
      <button ${currentPage === 1 ? 'disabled' : ''} data-page="prev">« 上一页</button>
    `;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
        html += `<button class="${currentPage === i ? 'active' : ''}" data-page="${i}">${i}</button>`;
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        html += '<button disabled>...</button>';
      }
    }

    html += `
      <button ${currentPage === totalPages ? 'disabled' : ''} data-page="next">下一页 »</button>
    `;

    container.innerHTML = html;

    // Add event listeners
    container.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const page = e.target.dataset.page;
        if (page === 'prev' && currentPage > 1) {
          currentPage--;
        } else if (page === 'next' && currentPage < totalPages) {
          currentPage++;
        } else if (page && page !== 'prev' && page !== 'next') {
          currentPage = parseInt(page);
        }
        filterAndRenderPosts();
        document.getElementById('blog').scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  function filterAndRenderPosts() {
    filterPosts();
    renderBlogPosts();
    renderPagination();
  }

  function initBlog() {
    const searchInput = document.getElementById('blog-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        currentPage = 1;
        filterAndRenderPosts();
      });
    }

    renderTagFilters();
    filterAndRenderPosts();
  }

  // Init
  initTheme();
  initThemeToggle();
  initNavToggle();
  initSmoothScrollOffset();
  initReveal();
  setYear();
  initBlog();
})();
