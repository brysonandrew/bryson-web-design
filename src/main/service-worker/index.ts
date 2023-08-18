export const initServiceWorker = async () => {
  if (!import.meta.env.DEV && navigator.serviceWorker) {
    try {
      const path = '/service-worker.js';
      await navigator.serviceWorker.register(path, {
        scope: '/',
      });
    } catch (error) {
      console.log(
        'ServiceWorker registration failed:',
        error,
      );
    }
  }
};
