# Perfume Paradise — Storefront Website

A luxury fragrance e-commerce storefront for **Perfume Paradise**, located at **Mall St. Mathews, Louisville, Kentucky**. Built as a fully static HTML/CSS/JS site — no build tools, no framework, no server required. Open `index.html` in a browser and it works.

---

## Live Features

| Page | Description |
|------|-------------|
| `index.html` | Homepage: hero, perks bar, tabbed product grids (Bestsellers · For Her · For Him · Unisex · New Arrivals), category cards, scent quiz, store info, recently viewed, newsletter |
| `products.html` | Full catalog with sidebar filters (category, scent family, concentration, brand, price, in-stock, bestsellers), URL param pre-selection, active filter chips, sort, product count |
| `product.html` | Product detail: image, size selector, add-to-cart, fragrance notes accordion, related products, recently viewed tracking |
| `checkout.html` | Customer info form, in-store pickup vs. shipping toggle, order summary sidebar, form validation, Clover order stub |
| `confirmation.html` | Order confirmation with itemized summary, next-steps block (pickup vs. shipping) |
| `policy.html` | Store info, hours, location, and return & exchange policy |

---

## Tech Stack

- **HTML5** — semantic, accessible markup
- **CSS3** — custom design system (`css/styles.css`), CSS variables, Cormorant Garamond + Jost fonts
- **Vanilla JS** — no dependencies, no bundler
- **Google Fonts** — loaded via `@import` in CSS

### Key JS files

| File | Role |
|------|------|
| `js/data.js` | 40+ product objects + `ProductService` (filter, search, sort, featured, bestsellers) |
| `js/cart.js` | Cart singleton with `localStorage` persistence, `CartUI` drawer |
| `js/main.js` | Shared UI: header scroll, search overlay, mobile menu, toast, tabs, wishlist, recently viewed, stars, scroll-reveal, animations |
| `js/clover-api.js` | Clover POS integration stub — falls back to local data until credentials are added |

---

## Running Locally

No server needed. Just open `index.html` in any modern browser:

```
Double-click index.html   →   Chrome / Edge / Firefox / Safari
```

Or serve with any static file server if you prefer:

```bash
npx serve .
# or
python -m http.server 8080
```

---

## Animation System

All motion is handled in `css/styles.css` (section 37) and `js/main.js`.

### Scroll Reveal
Elements marked with `data-reveal` animate as they enter the viewport via `IntersectionObserver`. The JS also auto-tags common selectors (section headers, store content, footer columns, etc.) so most elements animate without any HTML changes needed.

```html
<div data-reveal="up">Fades and rises into view</div>
<div data-reveal="left" data-delay="2">Slides in from left, 160ms delay</div>
<div data-reveal="scale">Scales up from 88%</div>
<div data-reveal="fade">Fades only, no transform</div>
```

Delay values `1`–`6` map to `80ms`–`480ms` steps, used for staggering siblings.

### Hero Entrance
The `.hero-animate` class is added to the hero section on first paint, triggering CSS keyframe animations that stagger the eyebrow label → headline → description → CTA buttons → image.

### Product Card Stagger
Every card rendered by `renderProductCard()` gets `product-card-enter`. After a grid is populated, `animateCards(container)` is called, which adds `card-in` to each card with a `60ms` interval between them — creating a cascade effect.

### Other Animations
- **Parallax** — hero image translates at 18% of scroll speed
- **Button ripple** — ink ripple on every `.btn` click
- **Mobile menu** — CSS opacity/visibility/transform slide (no `display:none` flash)
- **Tab panels** — `tabReveal` keyframe on `.tab-panel.active`
- **Wishlist heart** — `heartPop` scale keyframe on activation
- **Size button** — `sizePop` bounce on selection
- **Cart items** — `cartItemIn` slide from right on add
- **Confirmation icon** — `confirmPop` rotate-scale on page load
- **Announcement bar** — `slideDown` from top on first render
- **Page load bar** — thin gold progress bar at top of page, completes on `window.load`
- **Reduced motion** — all animations respect `prefers-reduced-motion: reduce`

---

## Bug Fixed — Products Not Loading

### Symptom
Opening `index.html` showed only skeleton placeholders. Products never appeared, even with internet. Refreshing, restarting the browser, and reconnecting to the internet made no difference.

### Root Cause
Every HTML page had this script block at the bottom:

```html
<script>
<!-- Business logic handled by js/ modules — source available upon request -->
</script>
```

An HTML comment (`<!-- -->`) inside a `<script>` tag is treated as JavaScript, not as a comment — and it's a syntax no-op. **No initialization code ever ran.** The product grids had skeleton `<div>` placeholders, but nothing replaced them with real cards.

The product data lives entirely in `js/data.js` (a local JS array). There is **zero network dependency** for product display. The bug had nothing to do with internet connectivity.

### Fix (applied 2026-04-26)
Replaced the empty script block in every page with real initialization code:

| Page | What was added |
|------|----------------|
| `index.html` | `loadHomepageProducts()` fills all 5 grids from `ProductService`; calls `initTabs`, `initScentQuiz`, `initNewsletter`, `initAnnouncementBar` |
| `products.html` | Full filter engine, brand list population, URL param reading, active filter chips, sort, mobile filter panel |
| `product.html` | Product load by URL hash, size selector, add-to-cart, accordion init, related products, recently viewed |
| `checkout.html` | Cart render, delivery toggle, form validation, order submit via `CloverAPI.createOrder()` |
| `confirmation.html` | Reads order from `sessionStorage`, renders itemized summary and next-steps |
| `policy.html` | Footer year + announcement bar |

---

## Clover POS Integration

The site is pre-wired for **Clover** payments and inventory sync. See [`CLOVER-SETUP-GUIDE.md`](CLOVER-SETUP-GUIDE.md) for the full step-by-step.

**Current state:** `js/clover-api.js` is a stub layer. All methods return local sample data. To go live:

1. Fill in `CloverConfig.MERCHANT_ID` and `CloverConfig.API_TOKEN`
2. Set `ENV: 'production'`
3. Uncomment the real `fetch()` calls in each method
4. Build a backend proxy (Node/PHP) so credentials stay server-side
5. Replace `CloverAPI.initPaymentForm()` stub with real Clover iframe

---

## File Structure

```
perfume-paradise/
├── index.html              Homepage
├── products.html           Full catalog + filters
├── product.html            Product detail page
├── checkout.html           Order form
├── confirmation.html       Post-order screen
├── policy.html             Store info & return policy
├── css/
│   └── styles.css          Entire design system + animation system
├── js/
│   ├── data.js             Product data + ProductService
│   ├── cart.js             Cart + CartUI
│   ├── main.js             Shared UI + all animations
│   └── clover-api.js       Clover integration stub
├── assets/
│   ├── favicon.svg
│   └── images/             (add real product photos here)
├── CLOVER-SETUP-GUIDE.md   Credentials + go-live checklist
└── README.md               This file
```

---

## Changelog

### 2026-04-26
**Bug fix — products not loading on any page**
- Root cause: every `<script>` block contained only an HTML comment, so no JS ever ran
- Fixed by writing real initialization code for all 6 pages
- Products now load from local data with no internet dependency

**Feature — full animation system**
- Added 500+ lines of motion CSS (scroll reveal, hero entrance, card stagger, tab fade, mobile menu slide, button ripple, parallax, heart pulse, size bounce, cart slide, confirmation pop, announcement slide, page load bar)
- `IntersectionObserver`-based scroll reveal with auto-tagging of common selectors
- Hero text stagger animation on first paint
- Product card cascade entrance (60ms per card)
- Parallax on hero image (18% scroll rate)
- Button ink ripple on all `.btn` clicks
- Respects `prefers-reduced-motion`

**Feature — products page filter engine**
- Filter by category, scent family, concentration, brand, price range, in-stock, bestsellers-only
- URL params pre-select filters (`?category=women`, `?search=rose`, `?sort=price-asc`)
- Active filter chips with × remove buttons
- Live product count display
- Mobile filter panel with slide animation

**Feature — product detail page**
- Loads product by URL hash (`product.html#dior-sauvage-edp`)
- Size selector with price update and bounce animation
- Add to cart, recently viewed tracking
- Related products grid
- Fragrance notes accordion

**Feature — checkout + confirmation flow**
- Checkout form with validation, delivery method toggle (pickup/shipping)
- Order submitted via `CloverAPI.createOrder()` stub, stored in `sessionStorage`
- Confirmation page reads order, shows itemized summary and correct next-steps

---

## Store Information

**Perfume Paradise**  
Mall St. Mathews  
Louisville, Kentucky

Return & exchange policy: 15 days with original receipt.
