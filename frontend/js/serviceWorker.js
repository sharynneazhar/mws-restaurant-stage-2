self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('mws-restaurant-stage-2').then(cache => {
      return cache.addAll([
        '/',
        '/css/styles.css',
        '/js/dbhelper.js',
        '/js/main.js',
      ]);
    })
  )
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
