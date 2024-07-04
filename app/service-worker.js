// service-worker.js
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('my-cache').then(function(cache) {
            return cache.addAll([
                '/',
                '/app/index.html',
                '/app/styles.css',
                '/app/script.js',
                '/app/manifest.json',
                '/app/icon-192x192.png',
                '/app/icon-512x512.png'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
