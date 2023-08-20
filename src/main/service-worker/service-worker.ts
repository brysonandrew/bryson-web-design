export type {};
declare const self: ServiceWorkerGlobalScope;

const VERSION_NUMBER = '0.1.0';
const CACHE_NAME = `v${VERSION_NUMBER}::brysona-service-worker`;

self.addEventListener('install', async (event) => {
  event.waitUntil(
    (async () => {
      // precache
      const cache = await caches.open(CACHE_NAME);
      const ASSET_PATHS = [
        '/light/favicon.ico',
        '/favicon.ico',
      ];
      await cache.addAll(ASSET_PATHS);
    })(),
  );
});

self.addEventListener('activate', async (event) => {
  const deleteExpiredCaches = async () => {
    const names = await caches.keys();
    const deleteHandlers = names.reduce(
      (a: Promise<boolean>[], cacheName) => {
        if (cacheName !== CACHE_NAME) {
          a.push(caches.delete(cacheName));
        }
        return a;
      },
      [],
    );
    await Promise.all(deleteHandlers);
  };
  const activateHandlers = async () => {
    await deleteExpiredCaches();
    self.clients.claim();
  };
  event.waitUntil(activateHandlers());
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  const requestURL = new URL(request.url);
  const acceptHeaders = request.headers.get('Accept');
  if (
    acceptHeaders?.includes('text/html') &&
    request.url.startsWith(location.origin)
  ) {
    // HTML cache
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
      (async () => {
        // HTML cache first then network
        const cache = await caches.open(CACHE_NAME);
        const cachedResponse = await cache.match(request);
        const networkResponsePromise = fetch(request);

        event.waitUntil(
          (async () => {
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
