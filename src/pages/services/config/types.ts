export type TIconId =
  | 'react-next'
  | 'vue-nuxt'
  | 'headless-wp'
  | 'ui-ux'
  | 'animations'
  | 'ai-tools'
  | 'performance-seo'
  | 'ongoing';

export type TService = {
  id: TIconId;
  title: string;
  short: string;
  full: string;
  bullets: string[];
};
