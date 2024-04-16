import { TError } from '@brysonandrew/config-types';

type TConfig = {
  precacheEntries?: string[];
  isDisabled?: boolean;
  path?: string;
};
export const init = async ({
  isDisabled,
  precacheEntries,
  path = './service-worker.js',
}: TConfig) => {
  if (!isDisabled && navigator.serviceWorker) {
    try {
      const sw: ServiceWorkerContainer =
        navigator.serviceWorker;
      await sw.register(path, {
        scope: '/',
      });
      sw.ready.then((registration) => {
        if (!registration.active) return null;
        if (Array.isArray(precacheEntries)) {
          registration.active.postMessage({
            type: 'precache',
            entries: precacheEntries,
            from: 'ACTIVE SW MAIN',
          });
        }
      });
    } catch (error: TError) {
      console.log(
        `ServiceWorker registration failed: `,
        error,
      );
    }
  }
};
