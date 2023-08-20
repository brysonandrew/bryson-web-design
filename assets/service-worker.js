const VERSION_NUMBER = '0.1.6';
const CACHE_NAME = `v${VERSION_NUMBER}::brysona-service-worker`;
const resolveCache = async () => await caches.open(CACHE_NAME);
const matchRequest = async (cache, request) => await cache.match(request);
self.addEventListener('install', async (event) => {
    // console.log('install', event);
    const precache = async () => {
        const cache = await resolveCache();
        const ASSET_PATHS = [
            '/light/favicon.ico',
            '/favicon.ico',
        ];
        await cache.addAll(ASSET_PATHS);
    };
    const installHandlers = async () => {
        await precache();
    };
    event.waitUntil(installHandlers());
});
self.addEventListener('activate', (event) => {
    // console.log('activate', event);
    const deleteExpiredCaches = async () => {
        const names = await caches.keys();
        const deleteHandlers = names.reduce((a, cacheName) => {
            if (cacheName !== CACHE_NAME) {
                a.push(caches.delete(cacheName));
            }
            return a;
        }, []);
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
    const acceptHeaders = request.headers.get('Accept');
    const isHtml = acceptHeaders?.includes('text/html') &&
        request.url.startsWith(location.origin);
    const cacheCopy = async () => {
        const cache = await resolveCache();
        let response = await fetch(request);
        try {
            const copy = response.clone();
            cache.put(request, copy);
        }
        catch (error) {
            const cachedResponse = await matchRequest(cache, request);
            if (cachedResponse) {
                response = cachedResponse;
            }
        }
        finally {
            return response;
        }
    };
    const staleWhileRevalidate = async () => {
        const cache = await resolveCache();
        const cachedResponse = await matchRequest(cache, request);
        const networkResponsePromise = fetch(request);
        const updateCache = async () => {
            const networkResponse = await networkResponsePromise;
            cache.put(request, networkResponse.clone());
        };
        event.waitUntil(updateCache());
        return cachedResponse || networkResponsePromise;
    };
    const messageHandlers = async () => {
        if (isHtml) {
            return cacheCopy();
        }
        return staleWhileRevalidate();
    };
    event.respondWith(messageHandlers());
});
// self.addEventListener('message', async (event) => {
//   const logMessage = () => {
//     console.log('message', event);
//   };
//   // const postMessage = async () => {};
//   const messageHandlers = async () => {
//     logMessage();
//     await postMessage();
//   };
//   event.waitUntil(messageHandlers());
// })
// const randomIndiciesMessage = () => {
//   if (type === 'random-indicies') {
//     console.log('postMessage.random-indicies', event);
//     const indicies: number[] = [];
//     const countAvailable = 6;
//     const countRequired = event.data.isMobile ? 4 : 6;
//     while (indicies.length < countRequired) {
//       const next = ~~(countAvailable * Math.random());
//       if (!indicies.includes(next)) {
//         indicies.push(next);
//       }
//     }
//     const images = indicies.map(
//       (_, index) => `/images/${index}-sm.png`,
//     );
//     const clients = await self.clients.matchAll();
//     console.log(clients);
//     clients.forEach((client) => {
//       client.postMessage({
//         type,
//         client: senderId,
//         message: images,
//       });
//     });
//     console.log(images);
//     const cache = await resolveCache();
//     await cache.addAll(images);
//   }
// };
