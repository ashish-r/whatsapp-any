/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
    const cacheName = 'whatsapp-direct-v1'
    const filesToCache = [
        'index.html',
        'css/style.css',
        'js/sw-install.js',
        'js/index.js',
    ]
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache)
        })
    )
})

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request)
        })
    )
})
