import { GOOGLE_MAPS_API_KEY } from '@pages/_dev/outreacher/timezone-timeline/constants';
import { useEffect, useState } from 'react';

let scriptLoadingPromise: Promise<void> | null = null;

export function useGoogleMapsLoader(
  libraries: string[] = ['places'],
) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) return;

    if (!scriptLoadingPromise) {
      scriptLoadingPromise = new Promise<void>(
        (resolve, reject) => {
          const key = GOOGLE_MAPS_API_KEY;

          if (!key) {
            console.error('Missing GOOGLE_MAPS_API_KEY');
            reject(new Error('Missing Google Maps key'));
            return;
          }

          // Check if script already exists in the DOM
          const existingScript = document.querySelector(
            `script[src^="https://maps.googleapis.com/maps/api/js"]`,
          );

          if (existingScript) {
            existingScript.addEventListener('load', () =>
              resolve(),
            );
            existingScript.addEventListener('error', () =>
              reject(
                new Error('Google Maps failed to load'),
              ),
            );
            return;
          }

          const script = document.createElement('script');
          script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=${libraries.join(
            ',',
          )}`;
          script.async = true;
          script.defer = true;

          script.onload = () => resolve();
          script.onerror = () =>
            reject(
              new Error(
                'Failed to load Google Maps script',
              ),
            );

          document.head.appendChild(script);
        },
      );
    }

    scriptLoadingPromise
      .then(() => setLoaded(true))
      .catch((err) => console.error(err));
  }, [loaded, libraries]);

  return loaded;
}
