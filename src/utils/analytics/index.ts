import Analytics from 'analytics';
import googleTagManager from '@analytics/google-tag-manager';

export const analytics = Analytics({
  app: 'brysona.dev',
  plugins: [
    googleTagManager({
      containerId: import.meta.env.VITE_ANALYTICS_ID,
    }),
  ],
});
