/**
 * PERFUME PARADISE — Product Catalog
 *
 * Contains the full product data store for the storefront:
 *   - Product objects with name, brand, price, sizes, categories, and image references
 *   - Category taxonomy (women, men, unisex)
 *   - Helper functions for filtering, sorting, and searching the catalog
 *
 * This file contains proprietary business data (pricing, inventory, product listings)
 * belonging to the client and is not included in this public repository.
 * Available upon request for verified opportunities.
 *
 * Contact: https://github.com/Karimabdelfattah7
 */

/*
 * BUG FIX REQUIRED — ProductService.getAll() caching
 *
 * Root cause: when a network fetch fails (no internet), the empty/failed result
 * gets written to localStorage. On every subsequent page load — even after the
 * connection is restored — the code finds the cached entry and returns the empty
 * data immediately without re-fetching. This is why refreshing 100 times doesn't help.
 *
 * Apply this pattern to your getAll() implementation:
 *
 *   const CACHE_KEY = 'pp_products';   // whatever key you currently use
 *
 *   async getAll() {
 *     const raw = localStorage.getItem(CACHE_KEY);
 *     if (raw) {
 *       try {
 *         const data = JSON.parse(raw);
 *         if (Array.isArray(data) && data.length > 0) return data;  // valid cache
 *       } catch {}
 *       localStorage.removeItem(CACHE_KEY);   // bad/empty cache — clear and re-fetch
 *     }
 *     const response = await fetch(YOUR_ENDPOINT);
 *     const data = await response.json();
 *     localStorage.setItem(CACHE_KEY, JSON.stringify(data));
 *     return data;
 *   },
 *
 *   clearCache() { localStorage.removeItem(CACHE_KEY); }
 *
 * Key rules:
 *   - NEVER cache an empty array or a failed response
 *   - ALWAYS validate the cached value (non-empty array) before returning it
 *   - ALWAYS expose clearCache() so the UI retry button can force a fresh fetch
 */
