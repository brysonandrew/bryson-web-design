console.log('SERVICE WORKER PAGE REGISTERED');
const VERSION_NUMBER = 3;
const CACHE_NAME = `V${VERSION_NUMBER}`;

self.addEventListener('install', (event) => {
  console.log('SERVICE WORKER: INSTALL');

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
      console.log('CACHING: ' + ASSET_PATHS.join(', '));
      console.time('CACHING');
      await cache.addAll(ASSET_PATHS);
      console.log('CACHING COMPLETE: ' + ASSET_PATHS.join(', '));
      console.timeEnd('CACHING');
    })(),
  );
});

self.addEventListener('activate', (event) => {
  console.log('SERVICE WORKER: ACTIVATE');

  event.waitUntil(
    (async function () {
      const cacheNames = await caches.keys();
      // DELETE OLD VERSION
      await Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName)),
      );
    })(),
  );
});

self.addEventListener('fetch', (event) => {
  console.log('SERVICE WORKER: FETCH');
  console.log(event);
  const requestURL = new URL(event.request.url);

  if (requestURL.origin === location.origin) {
    event.respondWith(
      (async function () {
        const cache = await caches.open(CACHE_NAME);
        const cachedResponse = await cache.match(event.request);
        const networkResponsePromise = fetch(event.request);

        event.waitUntil(
          (async function () {
            const networkResponse = await networkResponsePromise;
            await cache.put(event.request, networkResponse.clone());
          })(),
        );

        return cachedResponse || networkResponsePromise;
      })(),
    );
  }
});

self.addEventListener('push', (event) => {
  console.log('SERVICE WORKER: PUSH');

  if (event.data.text() == 'new-email') {
    event.waitUntil(
      (async function () {
        const cache = await caches.open('mysite-dynamic');
        const response = await fetch('/inbox.json');
        await cache.put('/inbox.json', response.clone());
        const emails = await response.json();
        registration.showNotification('New email', {
          body: 'From ' + emails[0].from.name,
          tag: 'new-email',
        });
      })(),
    );
  }
});

self.addEventListener('notificationclick', function (event) {
  console.log('SERVICE WORKER: NOTIFICATIONCLICK');

  if (event.notification.tag == 'new-email') {
    // Assume that all of the resources needed to render
    // /inbox/ have previously been cached, e.g. as part
    // of the install handler.
    const x = new WindowClient('/inbox/');
    console.log(x);
  }
});

self.addEventListener('sync', (event) => {
  console.log('SERVICE WORKER: SYNC');
  console.log(event);

  if (event.id == 'x') {
    event.waitUntil(
      (async function () {
        const cache = await caches.open(CACHE_NAME);
        await cache.add('/favicon-32x32.png');
      })(),
    );
  }
});
