// Basic service worker for GitHub Pages PWA

self.addEventListener('install', event => {
  console.log('Service Worker: Installed');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('Service Worker: Activated');
  return self.clients.claim();
});

// Optional: basic fetch handler (keeps app online even without caching)
self.addEventListener('fetch', event => {
  // You can add caching later if you want offline support
});