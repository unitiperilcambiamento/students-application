const CACHE_NAME = 'lista2-pwa-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/app.html',
  '/manifest.json',
  '/lista.png'
];

// Installazione del Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Intercettazione delle richieste
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});