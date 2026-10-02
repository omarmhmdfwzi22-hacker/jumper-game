const CACHE_NAME = 'doodle-jump-v2';
const STATIC_ASSETS = [
  './',
  './index.html',
  './doodle-jump.json',
  './favicon.ico',
  './css/core-game-site.css',
  './js/screenfull.min.js',
  './js/fulltilt.min.js',
  './js/doodle.min.js',
  './js/main.js',
  './images/doodle-jump-game-icon-192.png',
  './images/doodle-jump-game-icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('PWA Cache prefill error:', err);
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        return networkResponse;
      }).catch(() => {
        return caches.match('./index.html');
      });
    })
  );
});
