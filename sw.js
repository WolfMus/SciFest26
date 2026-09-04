const CACHE_NAME = 'photobooth-v1';
const ASSETS = [
  './',
  './index.html',
  './bg.jpg',
  './mask.png',
  './shadow.png'
];

// Установка и кеширование ресурсов
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Перехват запросов (возврат из кеша, если нет сети)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});