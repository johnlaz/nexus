// NEXUS v1 — Service Worker
const CACHE_NAME = 'nexus-v1.1';
const STATIC_ASSETS = [
  './index.html',
  './manifest.json',
  './icons/icon-32.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Mono:wght@300;400;500&family=Instrument+Sans:wght@300;400;500;600&display=swap'
];

// ── INSTALL: pre-cache static assets ──
self.addEventListener('install', event => {
  console.log('[Nexus SW] Installing v1...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(STATIC_ASSETS);
    }).then(() => {
      console.log('[Nexus SW] Pre-cache complete');
      return self.skipWaiting();
    })
  );
});

// ── ACTIVATE: purge old caches ──
self.addEventListener('activate', event => {
  console.log('[Nexus SW] Activating...');
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => {
          console.log('[Nexus SW] Deleting old cache:', key);
          return caches.delete(key);
        })
      )
    ).then(() => self.clients.claim())
  );
});

// ── FETCH: cache-first for shell assets, network-first for app iframes ──
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Don't intercept cross-origin iframe requests (the hosted PWAs)
  if (url.origin !== location.origin && !url.hostname.includes('fonts.googleapis') && !url.hostname.includes('fonts.gstatic')) {
    return;
  }

  // Cache-first strategy for our own assets + Google Fonts
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      return fetch(event.request).then(response => {
        // Only cache valid responses from our origin or fonts
        if (!response || response.status !== 200 || response.type === 'opaque') {
          return response;
        }
        const toCache = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, toCache));
        return response;
      }).catch(() => {
        // Offline fallback: return index.html for navigation requests
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
