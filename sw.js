// Service Worker cho Quản Lý Hàng Đi Bán - HUY DUNG
const CACHE_NAME = 'huy-dung-pwa-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json'
];

// Install: Cache các file cơ bản
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(function() {
      return self.skipWaiting();
    })
  );
});

// Activate: Xóa cache cũ
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(name) {
          return name !== CACHE_NAME;
        }).map(function(name) {
          return caches.delete(name);
        })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

// Fetch: Chiến lược Cache First với Network Fallback
self.addEventListener('fetch', function(event) {
  const request = event.request;
  
  // Chỉ xử lý GET requests
  if (request.method !== 'GET') return;
  
  // Cho navigation requests, dùng Network First
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).then(function(response) {
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then(function(cache) {
          cache.put(request, responseClone);
        });
        return response;
      }).catch(function() {
        return caches.match(request).then(function(cached) {
          return cached || caches.match('./index.html');
        });
      })
    );
    return;
  }
  
  // Các request khác: Cache First
  event.respondWith(
    caches.match(request).then(function(cached) {
      if (cached) return cached;
      
      return fetch(request).then(function(response) {
        // Không cache các response không hợp lệ hoặc từ các domain khác
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then(function(cache) {
          cache.put(request, responseClone);
        });
        
        return response;
      }).catch(function() {
        return cached;
      });
    })
  );
});
