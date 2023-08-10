const logStorageQuota = async () => {
  const storageQuota = await navigator.storage.estimate();
  console.log(storageQuota);
};

export const initServiceWorker = async () => {
  if (import.meta.env.DEV) return;
  await logStorageQuota();
  if (navigator.serviceWorker) {
    try {
      const register =
        await navigator.serviceWorker.register(
          '/service-worker.js',
          {
            scope: '/',
          },
        );
    } catch (error) {
      console.log(
        'ServiceWorker registration failed:',
        error,
      );
    }
  }
};
