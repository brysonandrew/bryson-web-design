export type {};
declare const self: ServiceWorkerGlobalScope;

const VERSION_NUMBER = '0.0.7';
const CACHE_NAME = `v${VERSION_NUMBER}::brysona-service-worker`;

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async function () {
      const cache = await caches.open(CACHE_NAME);
      const ASSET_PATHS = [
        '/android-chrome-192x192.png',
        '/android-chrome-512x512.png',
        '/apple-touch-icon.png',
        '/favicon-16x16.png',
        '/favicon-32x32',
      ];
      await cache.addAll(ASSET_PATHS);
    })(),
  );
});

self.addEventListener('activate', (event) => {

  event.waitUntil(
    (async function () {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName)),
      );
    })(),
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  const requestURL = new URL(request.url);
  if (
    request.headers.get('Accept')?.indexOf('text/html') !==
      -1 &&
    request.url.startsWith(location.origin)
  ) {
    const handler = async () => {
      let response = await fetch(request);
      try {
        const copy = response.clone();
        const cache = await caches.open(CACHE_NAME);
        cache.put(request, copy);
      } catch (error) {
        const match = await caches.match(request);
        if (match) {
          response = match;
        }
      } finally {
        return response;
      }
    };
    event.respondWith(handler());
  }

  if (requestURL.origin === location.origin) {
    event.respondWith(
      (async function () {
        const cache = await caches.open(CACHE_NAME);
        const cachedResponse = await cache.match(request);
        const networkResponsePromise = fetch(request);

        event.waitUntil(
          (async function () {
            const networkResponse =
              await networkResponsePromise;
            cache.put(request, networkResponse.clone());
          })(),
        );

        return cachedResponse || networkResponsePromise;
      })(),
    );
  }
});
