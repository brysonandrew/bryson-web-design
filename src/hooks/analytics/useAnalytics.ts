import Analytics from 'analytics';
import googleTagManager from '@analytics/google-tag-manager';
import { useEffect } from 'react';

export const useAnalytics = (title: string) => {
  useEffect(() => {
    try {
      const analytics = Analytics({
        app: 'brysona.dev',
        plugins: [
          googleTagManager({
            containerId: import.meta.env.VITE_ANALYTICS_ID,
          }),
        ],
      });

      analytics.page({ title });
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error(error);
      }
    }
  }, []);
};
