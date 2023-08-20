export const init = async () => {
  const isEnabled =
    !import.meta.env.DEV && navigator.serviceWorker;
  if (isEnabled) {
    try {
      const path = '/service-worker.js';
      const sw: ServiceWorkerContainer =
        navigator.serviceWorker;
      await sw.register(path, {
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
