# Perfume Paradise — Clover + SKU IQ Setup Guide

This guide covers every step required before your website goes live with real inventory and payment processing.

---

## Client Setup Checklist

Work through these steps at your delivery meeting and before launch.

### Step 1 — Clover Account Access

- [ ] Log in to your Clover dashboard at https://www.clover.com/dashboard
- [ ] Navigate to **Account & Setup → Merchant Information**
- [ ] Copy your **Merchant ID** (a string like `XXXXXXXXXXXXXXXXX`)

### Step 2 — Generate an API Token

- [ ] In the Clover dashboard, go to **More Tools → Developer Tools** (or visit https://clover.com/developers)
- [ ] Create a new app or select your existing storefront app
- [ ] Under **OAuth / API Tokens**, generate a new token with these permissions:
  - `INVENTORY_READ` — to fetch products
  - `INVENTORY_WRITE` — to update stock
  - `ORDERS_WRITE` — to create orders from the website
  - `PAYMENTS_WRITE` — to process transactions
- [ ] Copy and save the token securely (you will not see it again)

### Step 3 — Add Credentials to the Website

Open `js/clover-api.js` and replace the placeholder values:

```javascript
const CloverConfig = {
  MERCHANT_ID: 'YOUR_CLOVER_MERCHANT_ID',   // ← paste your Merchant ID here
  API_TOKEN:   'YOUR_CLOVER_API_TOKEN',      // ← paste your API token here
  ENV: 'sandbox',                            // ← change to 'production' when ready
};
```

> **Security:** For a live site, move these credentials to a backend server (Node.js, PHP, etc.) and never expose the API token in public JavaScript. Talk to your developer about setting up a backend proxy.

### Step 4 — Set Up SKU IQ

SKU IQ syncs your Clover POS inventory with the website in real time so stock levels stay accurate.

- [ ] Create an account at https://www.skuiq.com
- [ ] Connect your Clover account inside the SKU IQ dashboard
- [ ] Follow SKU IQ's setup wizard to map your Clover items to the website
- [ ] Enable the real-time inventory webhook so the website knows when items sell out in-store

### Step 5 — Upload Your Product Catalog to Clover

- [ ] In the Clover dashboard, go to **Inventory → Items**
- [ ] Add each fragrance with:
  - Item name and description
  - Price (per size variant)
  - SKU
  - Stock quantity
  - Photo
  - Category (Women / Men / Unisex)
- [ ] For size variants (30ml, 50ml, 100ml), use Clover's **Variants** or create separate items per size

### Step 6 — Switch the Website to Live Clover Data

Once credentials are added, uncomment the real API calls in `js/clover-api.js`:

- Replace `getProducts()` stub with the real fetch to `/api/products`
- Replace `createOrder()` stub with the real fetch to `/api/orders`
- Add your backend proxy server (see comments in `clover-api.js`)
- Set `ENV: 'production'` in CloverConfig

Test by loading the products page — you should see your real inventory.

### Step 7 — Enable Clover Payments on the Checkout Page

- [ ] In `checkout.html`, find the `<div id="cloverPaymentContainer">` block
- [ ] Replace the placeholder with Clover's hosted iframe by calling:

```javascript
CloverAPI.initPaymentForm('cloverPaymentContainer');
```

- [ ] Follow Clover's iframe integration guide:
  https://docs.clover.com/docs/clover-iframe-integrations

### Step 8 — Test End-to-End

- [ ] Add a product to cart → proceed to checkout → place a test order
- [ ] Verify the order appears in your Clover dashboard under **Orders**
- [ ] Test that stock decrements in Clover after a purchase
- [ ] Process a refund in Clover and verify it reflects on the website (via SKU IQ)
- [ ] Confirm order confirmation email is sent to the customer

### Step 9 — Final Pre-Launch Checks

- [ ] Review and approve the return/exchange policy display (footer, policy page, checkout)
- [ ] Add your store phone number and email to `policy.html`
- [ ] Confirm store hours in `policy.html` are accurate
- [ ] Replace all placeholder images in `assets/images/` with real product photos
- [ ] Replace the hero section placeholder in `index.html` with a real store/product photo
- [ ] Replace the store section placeholder in `index.html` with a real store photo
- [ ] Test the site on mobile, tablet, and desktop
- [ ] Set `ENV: 'production'` in `js/clover-api.js`

---

## File Reference

| File | Purpose |
|------|---------|
| `js/clover-api.js` | Clover credentials and API integration layer |
| `js/data.js` | Sample product data (replaced by Clover API in production) |
| `js/cart.js` | Shopping cart logic and localStorage persistence |
| `js/main.js` | Shared UI — header, search, navigation, product cards |
| `index.html` | Homepage with hero and featured products |
| `products.html` | Full product catalog with filtering |
| `product.html` | Individual product detail page |
| `checkout.html` | Customer info collection and order placement |
| `confirmation.html` | Post-order confirmation screen |
| `policy.html` | Store info, hours, location, and return policy |
| `assets/images/` | Product and store photos (add real images here) |

---

## Adding Real Product Images

Name your images to match the `image` field in `js/data.js`, or update the data file to match your filenames:

```
assets/images/velvet-rose.jpg
assets/images/ivory-peony.jpg
assets/images/oak-ember.jpg
... etc.
```

Image recommendations: minimum 800 × 1067px (3:4 ratio), JPEG or WebP, under 200KB each.

---

## Return & Exchange Policy (for reference)

> Returns or exchanges accepted within **15 days** with original receipt.

This policy is displayed in:
- The policy banner on every page
- The footer on every page
- The checkout page
- The order confirmation page
- The `policy.html` store information page

To change the policy wording, search for "15 days" across all HTML files and update each instance.

---

## Support

For Clover technical support: https://www.clover.com/help  
For SKU IQ support: https://support.skuiq.com  
For website changes: contact your web developer
