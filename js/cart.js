/**
 * PERFUME PARADISE — Cart Manager
 *
 * Handles all cart operations with localStorage persistence.
 * Cart is a singleton accessible via window.Cart.
 *
 * CLOVER INTEGRATION NOTE:
 * When placing an order, the cart contents will be sent to Clover
 * via the Clover Orders API. See clover-api.js for the integration.
 */

const Cart = (() => {
  const STORAGE_KEY = 'pp_cart';

  /* ── State ─────────────────────────────────────────────── */
  let _items = [];

  /* ── Load / Save ────────────────────────────────────────── */
  function _load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      _items = raw ? JSON.parse(raw) : [];
    } catch {
      _items = [];
    }
  }

  function _save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(_items));
    } catch {
      // localStorage unavailable — cart works in memory only
    }
    _notify();
  }

  /* ── Listeners ──────────────────────────────────────────── */
  const _listeners = new Set();

  function _notify() {
    _listeners.forEach(fn => fn([..._items]));
    // Update badge across all pages
    const badges = document.querySelectorAll('.cart-badge');
    const count = getCount();
    badges.forEach(badge => {
      badge.textContent = count;
      badge.classList.toggle('hidden', count === 0);
    });
  }

  /* ── Helpers ────────────────────────────────────────────── */
  function _makeLineId(productId, size) {
    return `${productId}::${size}`;
  }

  /* ── Public API ─────────────────────────────────────────── */
  function init() {
    _load();
    _notify();
  }

  function subscribe(fn) {
    _listeners.add(fn);
    return () => _listeners.delete(fn);
  }

  function add(product, size, qty = 1) {
    const price = (size && product.sizes)
      ? (product.sizes.find(s => s.size === size)?.price ?? product.price)
      : (product.salePrice ?? product.price);

    const lineId = _makeLineId(product.id, size ?? 'default');
    const existing = _items.find(i => i.lineId === lineId);

    if (existing) {
      existing.qty += qty;
    } else {
      _items.push({
        lineId,
        productId:  product.id,
        sku:        size ? product.sizes?.find(s => s.size === size)?.sku ?? product.sku : product.sku,
        name:       product.name,
        brand:      product.brand,
        size:       size ?? null,
        price,
        qty,
        image:      product.image ?? null,
        inStock:    product.inStock
      });
    }

    _save();
  }

  function remove(lineId) {
    _items = _items.filter(i => i.lineId !== lineId);
    _save();
  }

  function updateQty(lineId, qty) {
    const item = _items.find(i => i.lineId === lineId);
    if (!item) return;
    if (qty <= 0) { remove(lineId); return; }
    item.qty = qty;
    _save();
  }

  function clear() {
    _items = [];
    _save();
  }

  function getItems() { return [..._items]; }

  function getCount() { return _items.reduce((acc, i) => acc + i.qty, 0); }

  function getSubtotal() {
    return _items.reduce((acc, i) => acc + (i.price * i.qty), 0);
  }

  function isEmpty() { return _items.length === 0; }

  /** Serialize cart for Clover order creation (see clover-api.js) */
  function toCloverOrder() {
    return {
      lineItems: _items.map(i => ({
        item: { id: i.productId },
        sku: i.sku,
        name: i.name + (i.size ? ` (${i.size})` : ''),
        price: Math.round(i.price * 100), // Clover uses cents
        unitQty: i.qty,
        unitName: 'item'
      }))
    };
  }

  return {
    init, subscribe, add, remove, updateQty, clear,
    getItems, getCount, getSubtotal, isEmpty, toCloverOrder
  };
})();

/* ── Cart Drawer UI ─────────────────────────────────────────── */
const CartUI = (() => {
  let _overlay, _drawer, _itemsEl, _subtotalEl;

  function _formatPrice(n) {
    return '$' + n.toFixed(2);
  }

  function _renderItem(item) {
    const li = document.createElement('div');
    li.className = 'cart-item';
    li.dataset.lineId = item.lineId;

    li.innerHTML = `
      <div class="cart-item-img-wrap">
        <img class="cart-item-img" src="${item.image || 'assets/images/placeholder.jpg'}"
          alt="${item.name}"
          onerror="this.src='assets/images/placeholder.jpg'">
      </div>
      <div class="cart-item-info">
        <div class="cart-item-brand">${item.brand}</div>
        <div class="cart-item-name">${item.name}</div>
        ${item.size ? `<div class="cart-item-size">${item.size}</div>` : ''}
        <div class="qty-control" style="margin-top:0.4rem">
          <button class="qty-btn" data-action="dec" aria-label="Decrease quantity">−</button>
          <div class="qty-display">${item.qty}</div>
          <button class="qty-btn" data-action="inc" aria-label="Increase quantity">+</button>
        </div>
        <button class="cart-item-remove" data-action="remove">Remove</button>
      </div>
      <div class="cart-item-price">${_formatPrice(item.price * item.qty)}</div>
    `;

    // Bind controls
    li.querySelector('[data-action="dec"]').addEventListener('click', () => Cart.updateQty(item.lineId, item.qty - 1));
    li.querySelector('[data-action="inc"]').addEventListener('click', () => Cart.updateQty(item.lineId, item.qty + 1));
    li.querySelector('[data-action="remove"]').addEventListener('click', () => Cart.remove(item.lineId));

    return li;
  }

  function _render(items) {
    if (!_itemsEl) return;
    _itemsEl.innerHTML = '';

    if (items.length === 0) {
      _itemsEl.innerHTML = `
        <div class="cart-empty">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"/></svg>
          <p>Your cart is empty</p>
          <a href="products.html" class="btn btn-secondary btn-sm" onclick="CartUI.close()">Shop Now</a>
        </div>`;
      if (_subtotalEl) _subtotalEl.textContent = '$0.00';
      return;
    }

    items.forEach(item => _itemsEl.appendChild(_renderItem(item)));
    if (_subtotalEl) _subtotalEl.textContent = _formatPrice(Cart.getSubtotal());
  }

  function open() {
    _overlay?.classList.add('open');
    _drawer?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    _overlay?.classList.remove('open');
    _drawer?.classList.remove('open');
    document.body.style.overflow = '';
  }

  function init() {
    _overlay   = document.getElementById('cartOverlay');
    _drawer    = document.getElementById('cartDrawer');
    _itemsEl   = document.getElementById('cartItems');
    _subtotalEl = document.getElementById('cartSubtotal');

    if (!_drawer) return;

    // Close on overlay click
    _overlay?.addEventListener('click', close);

    // Close button
    document.getElementById('cartClose')?.addEventListener('click', close);

    // Cart toggle button(s)
    document.querySelectorAll('[data-cart-toggle]').forEach(btn => {
      btn.addEventListener('click', open);
    });

    // Subscribe to cart changes
    Cart.subscribe(_render);

    // Initial render
    _render(Cart.getItems());
  }

  return { init, open, close };
})();

window.Cart = Cart;
window.CartUI = CartUI;
