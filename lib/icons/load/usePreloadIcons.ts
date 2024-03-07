import { TError } from '@brysonandrew/config-types';
import { TIconLoadValue } from '@brysonandrew/icons-keys';
import {
  IconifyIconLoaderAbort,
  loadIcons,
} from '@iconify/react';
import { useEffect, useRef } from 'react';

export const usePreloadIcons = (iconKeys: TIconLoadValue[]) => {
  const unsubscribeRef =
    useRef<null | IconifyIconLoaderAbort>(null);

  useEffect(() => {
    const loadTestIcons = (
      icons: TIconLoadValue[],
    ) => {
      return new Promise((fulfill, reject) => {
        loadIcons(
          icons,
          (loaded, missing, pending, unsubscribe) => {
            unsubscribeRef.current = unsubscribe;
            if (pending.length) {
              return;
            }
            if (missing.length) {
              reject({
                loaded,
                missing,
              });
            } else {
              fulfill({
                loaded,
              });
            }
          },
        );
      });
    };

    const init = async () => {
      try {
        return await loadTestIcons(iconKeys);
      } catch (error) {
        console.error(
          'Failed to load icons:',
          (error as TError).missing,
        );
      }
    };

    init();

    return () => {
      if (unsubscribeRef.current) {
        unsubscribeRef.current();
      }
    };
  }, []);
};
