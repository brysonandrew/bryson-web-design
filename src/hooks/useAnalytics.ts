import Analytics from 'analytics';
import googleTagManager from '@analytics/google-tag-manager';

export const useAnalytics = (title: string) => {
  try {
    const analytics = Analytics({
      app: 'brysona',
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
};
