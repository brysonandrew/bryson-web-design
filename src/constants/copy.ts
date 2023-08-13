export const TITLE_BASE = 'Bryson A.';
export const STORY: Record<string, string> = {
  build: 'Building websites and apps',
  tech: 'With the power of',
  projects: 'Latest projects',
  contact: 'Get in touch',
};

export const PAGE_TITLES = ['Projects', 'Contact'] as const;
export type TPageTitle = (typeof PAGE_TITLES)[number];
