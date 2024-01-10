import precacheEntries from './precache.json';

export const init = async () => {
  const isEnabled =
    !import.meta.env.DEV &&
    navigator.serviceWorker;
  if (isEnabled) {
    try {
      const path = '/service-worker.js';
      const sw: ServiceWorkerContainer =
        navigator.serviceWorker;
      await sw.register(path, {
        scope: '/',
      });
      sw.ready.then((registration) => {
        if (!registration.active) return null;
        registration.active.postMessage({
          type: 'precache',
          entries: precacheEntries,
          from: 'ACTIVE SW MAIN',
        });
      });
    } catch (error) {
      console.log(
        'ServiceWorker registration failed:',
        error,
      );
    }
  }
};
