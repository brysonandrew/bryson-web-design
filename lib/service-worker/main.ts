import { TMediaRecords } from '@brysonandrew/media/config/types';
import pkg from './package.json';
export type {};
declare const self: ServiceWorkerGlobalScope;

const VERSION_NUMBER = pkg.version;
const CACHE_NAME = `v${VERSION_NUMBER}::${pkg.name}`;

const resolveCache = async (): Promise<Cache> =>
  caches.open(CACHE_NAME);

const matchRequest = async (
  cache: Cache,
  request: Request,
): Promise<Response | undefined> => cache.match(request);

const putRequest = async (
  cache: Cache,
  request: Request,
  response: Response,
): Promise<void | null> =>
  request.method === 'GET'
    ? cache.put(request, response)
    : null;

const resolveRandomMedia = (records: TMediaRecords) => {
  const count = records.length;
  const indicies: number[] = [];
  const requiredCount = Math.min(count, 8);
  while (indicies.length < requiredCount) {
    const next = ~~(count * Math.random());
    if (!indicies.includes(next)) {
      indicies.push(next);
    }
  }
  const nextRecords = indicies.map(
    (index) => records[index],
  );
  return nextRecords;
};

type TMessage = any;
const sendMessage = async (message: TMessage) => {
  const recipients = await self.clients.matchAll();
  recipients.forEach((client) => {
    client.postMessage(message);
  });
};

const precache = async (paths: string[]) => {
  const cache = await resolveCache();
  await cache.addAll(paths);
};

self.addEventListener('message', async (event) => {
  const data = event.data;
  if (data.type === 'init-screens') {
    const records = resolveRandomMedia(data.records);
    sendMessage({
      type: 'init-screens',
      records,
      from: 'MESSAGE',
    });
  }
  if (data.type === 'precache') {
    const paths = data.entries;
    await precache(paths);
  }
});
self.addEventListener('install', (event) => {
  const installHandlers = async () => {
    try {
      await precache(['/favicon.ico']);
    } catch (error) {
      console.error(error);
    }
  };
  event.waitUntil(installHandlers());
});

self.addEventListener('activate', (event) => {
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
    try {
      await deleteExpiredCaches();
      self.clients.claim();
    } catch (error) {
      console.error(error);
    }
  };
  event.waitUntil(activateHandlers());
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  const acceptHeaders = request.headers.get('Accept');

  const isHtml =
    acceptHeaders?.includes('text/html') &&
    request.url.startsWith(location.origin);

  const cacheCopy = async () => {
    const cache = await resolveCache();
    let response = await fetch(request, {
      cache: 'no-store',
    });
    try {
      const copy = response.clone();
      putRequest(cache, request, copy);
    } catch (error) {
      const cachedResponse = await matchRequest(
        cache,
        request,
      );
      if (cachedResponse) {
        response = cachedResponse;
      }
    }
    return response;
  };

  const staleWhileRevalidate = async () => {
    const cache = await resolveCache();
    const cachedResponse = await matchRequest(
      cache,
      request,
    );
    const networkResponsePromise = fetch(request, {
      cache: 'no-store',
    });

    const updateCache = async () => {
      const networkResponse = await networkResponsePromise;
      const copy = networkResponse.clone();
      putRequest(cache, request, copy);
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

  try {
    event.respondWith(messageHandlers());
  } catch (error) {
    console.error(error);
  }
});
