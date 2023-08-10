import Analytics from 'analytics';
import googleTagManager from '@analytics/google-tag-manager';

export const useAnalytics = (title: string) => {
  const analytics = Analytics({
    app: 'brysona',
    plugins: [
      googleTagManager({
        containerId: import.meta.env.VITE_ANALYTICS_ID,
      }),
    ],
  });

  analytics.page({ title });
};
