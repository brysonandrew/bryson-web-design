export const init = async () => {
  const isEnabled =
    // !import.meta.env.DEV &&
    navigator.serviceWorker;
  if (isEnabled) {
    try {
      const path = '/service-worker.js';
      const sw: ServiceWorkerContainer =
        navigator.serviceWorker;
      const registration = await sw.register(path, {
        scope: '/',
      });
      const active = registration.active;
      if (active) {
        // active.postMessage({
        //   type: 'random-indicies',
        //   isDesktop,
        // });
      }
    } catch (error) {
      console.log(
        'ServiceWorker registration failed:',
        error,
      );
    }
  }
};
