/**
 * PERFUME PARADISE — Shared UI Utilities
 * Runs on every page: header behavior, search overlay, toasts.
 */

document.addEventListener('DOMContentLoaded', () => {
  Cart.init();
  CartUI.init();
  initHeader();
  initSearch();
  initMobileMenu();
  highlightActiveNav();
  initPageLoadBar();
  initScrollReveal();
  initHeroAnimation();
  initButtonRipples();
  initParallax();
});

/* ── Header scroll effect ────────────────────────────────── */
function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const toggle = () => header.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', toggle, { passive: true });
  toggle();
}

/* ── Active nav link ─────────────────────────────────────── */
function highlightActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a, .mobile-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

/* ── Mobile menu ─────────────────────────────────────────── */
function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const menu   = document.getElementById('mobileMenu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Close on nav link click
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Close on outside tap (overlay)
  document.addEventListener('click', (e) => {
    if (menu.classList.contains('open') &&
        !menu.contains(e.target) && !toggle.contains(e.target)) {
      menu.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
}

/* ── Search Overlay ──────────────────────────────────────── */
function initSearch() {
  const overlay = document.getElementById('searchOverlay');
  const input   = document.getElementById('searchInput');
  const close   = document.getElementById('searchClose');
  if (!overlay) return;

  document.querySelectorAll('[data-search-toggle]').forEach(btn => {
    btn.addEventListener('click', () => {
      overlay.classList.add('open');
      setTimeout(() => input?.focus(), 50);
    });
  });

  close?.addEventListener('click', closeSearch);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeSearch(); });

  input?.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeSearch(); return; }
    if (e.key === 'Enter') {
      const q = input.value.trim();
      if (q) {
        window.location.href = `products.html?search=${encodeURIComponent(q)}`;
      }
    }
  });

  function closeSearch() {
    overlay.classList.remove('open');
    if (input) input.value = '';
  }
}

/* ── Toast Notifications ─────────────────────────────────── */
const Toast = (() => {
  let container;

  function _getContainer() {
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    return container;
  }

  function show(message, type = 'success', duration = 3000) {
    const c = _getContainer();
    const el = document.createElement('div');
    el.className = `toast toast-${type}`;

    const icon = type === 'success'
      ? `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`
      : `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"/></svg>`;

    el.innerHTML = `${icon}<span>${message}</span>`;
    c.appendChild(el);

    setTimeout(() => {
      el.classList.add('removing');
      el.addEventListener('animationend', () => el.remove());
    }, duration);
  }

  return { show };
})();

window.Toast = Toast;

/* ── Accordion components ────────────────────────────────── */
function initAccordions(container = document) {
  container.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.accordion-item');
      const wasOpen = item.classList.contains('open');
      // Close all siblings
      item.closest('.product-details-accordion')
          ?.querySelectorAll('.accordion-item')
          .forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
}

window.initAccordions = initAccordions;

/* ── Price formatting helper ─────────────────────────────── */
function formatPrice(n) {
  return '$' + parseFloat(n).toFixed(2);
}

window.formatPrice = formatPrice;

/* ── Product card renderer ───────────────────────────────── */
function renderProductCard(product) {
  const price = product.salePrice
    ? `<span class="product-price product-price-sale">${formatPrice(product.salePrice)}</span>
       <span class="product-price-original">${formatPrice(product.price)}</span>`
    : `<span class="product-price">${formatPrice(product.price)}</span>`;

  const badges = [];
  if (product.isNew)       badges.push(`<span class="product-badge badge-new">New</span>`);
  else if (product.salePrice) badges.push(`<span class="product-badge badge-sale">Sale</span>`);
  else if (!product.inStock)  badges.push(`<span class="product-badge badge-out">Sold Out</span>`);
  if (product.isBestseller)   badges.push(`<span class="product-badge badge-bestseller" style="background:var(--color-gold);color:#fff;margin-left:4px">Bestseller</span>`);

  const defaultSize = product.sizes?.[product.sizes.length - 1];
  const isWishlisted = typeof Wishlist !== 'undefined' && Wishlist.has(product.id);

  const heartSVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/></svg>`;

  const concentrationBadge = product.concentration
    ? `<span class="concentration-badge">${product.concentration}</span>` : '';

  const notesTooltip = (product.notes && product.notes.top)
    ? `<span class="notes-trigger">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .23 2.71-1.158 2.71H3.956c-1.388 0-2.158-1.71-1.158-2.71L4.2 15.3"/></svg>
        Notes
        <div class="notes-tooltip">
          <strong style="color:var(--color-gold-light);display:block;margin-bottom:2px">Top</strong>${product.notes.top}<br>
          <strong style="color:var(--color-gold-light);display:block;margin-top:4px;margin-bottom:2px">Heart</strong>${product.notes.middle}<br>
          <strong style="color:var(--color-gold-light);display:block;margin-top:4px;margin-bottom:2px">Base</strong>${product.notes.base}
        </div>
      </span>` : '';

  const card = document.createElement('article');
  card.className = 'product-card product-card-enter';
  card.innerHTML = `
    <a href="product.html#${product.id}" class="product-card-media" aria-label="${product.name}">
      <div style="position:absolute;top:0.65rem;left:0.65rem;display:flex;gap:4px;z-index:2;flex-wrap:wrap">
        ${badges.join('')}
      </div>
      <button class="wishlist-btn${isWishlisted ? ' active' : ''}" data-wishlist="${product.id}" aria-label="Add to wishlist">
        ${heartSVG}
      </button>
      <div class="product-card-media-placeholder" data-placeholder>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .23 2.71-1.158 2.71H3.956c-1.388 0-2.158-1.71-1.158-2.71L4.2 15.3"/>
        </svg>
        <span>Fragrance</span>
      </div>
      <img class="product-card-img" src="${product.image}" alt="${product.name}"
        onload="this.style.opacity='1';this.previousElementSibling.style.display='none'"
        onerror="this.style.display='none'"
        loading="lazy">
      ${product.inStock ? `
        <div class="product-card-quick-add">
          <button class="btn btn-primary btn-sm btn-block quick-add-btn"
            data-product-id="${product.id}"
            data-size="${defaultSize?.size || ''}">
            Add to Cart
          </button>
        </div>` : ''}
    </a>
    <div class="product-card-body">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.3rem">
        <div class="product-card-brand">${product.brand}</div>
        ${concentrationBadge}
      </div>
      <a href="product.html#${product.id}">
        <h3 class="product-card-name">${product.name}</h3>
      </a>
      ${product.rating ? renderStars(product.rating, product.reviewCount) : ''}
      <p class="product-card-scent" style="margin-top:0.3rem">${product.shortDescription}</p>
      ${notesTooltip}
      <div class="product-card-footer">
        <div>${price}</div>
        ${product.inStock
          ? `<span class="product-stock-tag stock-in">In Stock</span>`
          : `<span class="product-stock-tag stock-out">Sold Out</span>`}
      </div>
    </div>
  `;

  // Wishlist toggle
  card.querySelector('.wishlist-btn')?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const btn = e.currentTarget;
    const added = Wishlist.toggle(product.id);
    btn.classList.toggle('active', added);
    Toast.show(added ? `Added to Wishlist` : `Removed from Wishlist`);
  });

  // Quick add
  card.querySelector('.quick-add-btn')?.addEventListener('click', async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const btn = e.currentTarget;
    const size = btn.dataset.size || null;
    btn.textContent = 'Adding…';
    btn.disabled = true;
    Cart.add(product, size);
    CartUI.open();
    Toast.show(`${product.name} added to cart`);
    updateShippingBar();
    setTimeout(() => { btn.textContent = 'Add to Cart'; btn.disabled = false; }, 800);
  });

  return card;
}

window.renderProductCard = renderProductCard;

/* ── Stagger-animate cards in a grid container ───────────── */
function animateCards(container) {
  if (!container) return;
  const cards = container.querySelectorAll('.product-card-enter:not(.card-in)');
  cards.forEach((card, i) => {
    setTimeout(() => card.classList.add('card-in'), i * 60);
  });
}

window.animateCards = animateCards;

/* ── Wishlist ─────────────────────────────────────────────── */
const Wishlist = (() => {
  const KEY = 'pp_wishlist';

  function getIds() {
    try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch { return []; }
  }

  function save(ids) { localStorage.setItem(KEY, JSON.stringify(ids)); }

  function has(id) { return getIds().includes(id); }

  function toggle(id) {
    const ids = getIds();
    const idx = ids.indexOf(id);
    if (idx === -1) ids.push(id); else ids.splice(idx, 1);
    save(ids);
    return idx === -1;
  }

  return { has, toggle, getIds };
})();

window.Wishlist = Wishlist;

/* ── Star rating renderer ────────────────────────────────── */
function renderStars(rating, reviewCount) {
  if (!rating) return '';
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;

  const starSVG = (type) => {
    if (type === 'full')
      return `<svg class="star" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`;
    if (type === 'half')
      return `<svg class="star" viewBox="0 0 20 20"><defs><linearGradient id="hg"><stop offset="50%" stop-color="currentColor"/><stop offset="50%" stop-color="#e5e7eb"/></linearGradient></defs><path fill="url(#hg)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`;
    return `<svg class="star" viewBox="0 0 20 20" fill="#e5e7eb"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`;
  };

  const stars = Array(full).fill('full').concat(Array(half).fill('half')).concat(Array(empty).fill('empty'));
  const count = reviewCount ? `<span class="review-count">(${reviewCount >= 1000 ? (reviewCount/1000).toFixed(1)+'k' : reviewCount})</span>` : '';
  return `<div class="star-rating"><div class="stars">${stars.map(starSVG).join('')}</div>${count}</div>`;
}

window.renderStars = renderStars;

/* ── Recently Viewed ─────────────────────────────────────── */
const RecentlyViewed = (() => {
  const KEY = 'pp_recently_viewed';
  const MAX = 6;

  function getIds() {
    try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch { return []; }
  }

  function add(id) {
    let ids = getIds().filter(i => i !== id);
    ids.unshift(id);
    ids = ids.slice(0, MAX);
    localStorage.setItem(KEY, JSON.stringify(ids));
  }

  async function getProducts() {
    const ids = getIds();
    const all = await ProductService.getAll();
    return ids.map(id => all.find(p => p.id === id)).filter(Boolean);
  }

  return { add, getProducts, getIds };
})();

window.RecentlyViewed = RecentlyViewed;

/* ── Render recently viewed section ─────────────────────── */
async function renderRecentlyViewed(containerId) {
  const wrap = document.getElementById(containerId);
  if (!wrap) return;
  const products = await RecentlyViewed.getProducts();
  if (products.length < 2) { wrap.closest('.recently-viewed')?.remove(); return; }
  const grid = wrap.querySelector('.product-grid');
  if (!grid) return;
  products.forEach(p => grid.appendChild(renderProductCard(p)));
}

window.renderRecentlyViewed = renderRecentlyViewed;

/* ── Free shipping bar in cart ───────────────────────────── */
const FREE_SHIPPING_THRESHOLD = 150;

function updateShippingBar() {
  const bar = document.getElementById('shippingBar');
  if (!bar) return;
  const subtotal = Cart.getSubtotal ? Cart.getSubtotal() : 0;
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const pct = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
  const fill = bar.querySelector('.shipping-progress-fill');
  const text = bar.querySelector('.shipping-bar-text');
  if (fill) fill.style.width = pct + '%';
  if (text) {
    if (remaining === 0) {
      text.innerHTML = `🎉 You've unlocked <strong>Free Shipping!</strong>`;
    } else {
      text.innerHTML = `Spend <strong>$${remaining.toFixed(2)} more</strong> for free shipping`;
    }
  }
}

window.updateShippingBar = updateShippingBar;

/* ── Scent Quiz ──────────────────────────────────────────── */
function initScentQuiz() {
  const overlay = document.getElementById('quizOverlay');
  if (!overlay) return;

  const openBtns = document.querySelectorAll('[data-open-quiz]');
  openBtns.forEach(b => b.addEventListener('click', openQuiz));

  const closeBtn = overlay.querySelector('.quiz-modal-close');
  closeBtn?.addEventListener('click', closeQuiz);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeQuiz(); });

  let answers = {};
  let step = 0;

  function openQuiz() {
    answers = {}; step = 0;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    showStep(0);
  }

  function closeQuiz() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  function showStep(n) {
    overlay.querySelectorAll('.quiz-step').forEach((el, i) => el.classList.toggle('active', i === n));
    overlay.querySelectorAll('.quiz-progress-dot').forEach((el, i) => el.classList.toggle('done', i <= n));
  }

  overlay.querySelectorAll('.quiz-option').forEach(opt => {
    opt.addEventListener('click', () => {
      const stepEl = opt.closest('.quiz-step');
      stepEl.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      answers[stepEl.dataset.step] = opt.dataset.value;

      setTimeout(async () => {
        step++;
        if (step < 3) {
          showStep(step);
        } else {
          await showResult();
          showStep(3);
        }
      }, 350);
    });
  });

  async function showResult() {
    const { gender, mood, family } = answers;
    const cats = gender === 'both' ? ['men', 'women', 'unisex'] : [gender, 'unisex'];
    const families = family ? [family] : [];
    let products = await ProductService.filter({ categories: cats, scentFamilies: families });
    if (products.length === 0) products = await ProductService.filter({ categories: cats });
    const picks = products.sort(() => 0.5 - Math.random()).slice(0, 4);
    const grid = document.getElementById('quizResultGrid');
    if (grid) {
      grid.innerHTML = '';
      picks.forEach(p => grid.appendChild(renderProductCard(p)));
    }
  }
}

window.initScentQuiz = initScentQuiz;

/* ── Page-load progress bar ──────────────────────────────── */
function initPageLoadBar() {
  const bar = document.createElement('div');
  bar.id = 'pp-load-bar';
  document.body.prepend(bar);

  // Animate to 80% immediately, finish on load
  requestAnimationFrame(() => { bar.style.width = '72%'; });

  window.addEventListener('load', () => {
    bar.style.width = '100%';
    setTimeout(() => { bar.style.opacity = '0'; }, 400);
    setTimeout(() => { bar.remove(); }, 800);
  });
}

/* ── Scroll reveal ───────────────────────────────────────── */
function initScrollReveal() {
  // Auto-tag elements that should animate on scroll (skips already-tagged ones)
  const rules = [
    ['.section-header',           'up',    null],
    ['.store-media',              'left',  null],
    ['.store-content',            'right', null],
    ['.store-content h2',         'up',    null],
    ['.store-content > p',        'up',    '1'],
    ['.store-detail',             'up',    null],
    ['.store-content .btn',       'up',    '2'],
    ['.policy-card',              'up',    null],
    ['.scent-quiz-banner h2',     'up',    null],
    ['.scent-quiz-banner p',      'up',    '1'],
    ['.scent-quiz-banner .btn',   'up',    '2'],
    ['.newsletter-section h2',    'up',    null],
    ['.newsletter-section p',     'up',    '1'],
    ['.newsletter-form',          'up',    '2'],
    ['.newsletter-success',       'fade',  null],
    ['.footer-brand',             'up',    null],
    ['.footer-col',               'up',    null],
    ['.footer-location',          'up',    null],
    ['.category-card',            'up',    null],
    ['.page-hero h1',             'up',    null],
    ['.page-hero p',              'up',    '1'],
    ['.page-hero .breadcrumb',    'up',    null],
    ['.confirmation-wrap h2',     'up',    '1'],
    ['.confirmation-wrap > div > p', 'up', '2'],
    ['.order-summary',            'up',    '1'],
    ['.recently-viewed .section-header', 'up', null],
  ];

  rules.forEach(([selector, dir, delay]) => {
    document.querySelectorAll(selector).forEach((el, idx) => {
      if (el.hasAttribute('data-reveal')) return;
      el.setAttribute('data-reveal', dir);
      // If multiple siblings of the same type, stagger them automatically
      if (!delay && idx > 0 && idx <= 5) {
        el.setAttribute('data-delay', String(idx));
      } else if (delay) {
        el.setAttribute('data-delay', delay);
      }
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
}

// Call after dynamic content is injected (e.g. product grids)
function refreshScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });

  document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach(el => observer.observe(el));
}

window.refreshScrollReveal = refreshScrollReveal;

/* ── Hero entrance animation ─────────────────────────────── */
function initHeroAnimation() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  // Small RAF delay so the class is applied after first paint
  requestAnimationFrame(() => {
    requestAnimationFrame(() => hero.closest('section, .hero')?.classList.add('hero-animate') ||
      hero.classList.add('hero-animate'));
  });
}

/* ── Button ripple effect ────────────────────────────────── */
function initButtonRipples() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn');
    if (!btn || btn.disabled) return;

    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.4;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top  - size / 2;

    const ripple = document.createElement('span');
    ripple.className = 'btn-ripple';
    ripple.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px`;
    btn.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
  });
}

/* ── Hero parallax on scroll ─────────────────────────────── */
function initParallax() {
  const media = document.querySelector('.hero-media');
  if (!media) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      const max = media.offsetHeight;
      if (scrollY < max) {
        media.style.transform = `translateY(${scrollY * 0.18}px)`;
      }
      ticking = false;
    });
    ticking = true;
  }, { passive: true });
}

/* ── Newsletter form ─────────────────────────────────────── */
function initNewsletter() {
  const form = document.getElementById('newsletterForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    form.style.display = 'none';
    const success = document.getElementById('newsletterSuccess');
    if (success) success.style.display = 'flex';
  });
}

window.initNewsletter = initNewsletter;

/* ── Announcement bar ────────────────────────────────────── */
function initAnnouncementBar() {
  const bar = document.getElementById('announcementBar');
  if (!bar) return;
  if (sessionStorage.getItem('pp_ann_dismissed')) { bar.remove(); return; }

  document.body.classList.add('announcement-active');

  const closeBtn = bar.querySelector('.announcement-close');
  closeBtn?.addEventListener('click', () => {
    bar.remove();
    document.body.classList.remove('announcement-active');
    sessionStorage.setItem('pp_ann_dismissed', '1');
  });
}

window.initAnnouncementBar = initAnnouncementBar;

/* ── Tab switcher ─────────────────────────────────────────── */
function initTabs(container) {
  const el = container || document;
  el.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const panel = btn.dataset.tab;
      const parent = btn.closest('section') || btn.closest('.tabs-wrap') || document;
      parent.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      parent.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const activePanel = parent.querySelector(`[data-panel="${panel}"]`);
      activePanel?.classList.add('active');
      // Stagger-animate any cards in the newly active panel
      if (activePanel) animateCards(activePanel);
    });
  });
}

window.initTabs = initTabs;
