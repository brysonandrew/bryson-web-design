export const TITLE_BASE = 'Bryson A.';
export const SECTION_TITLES = {
  build: 'Building websites and apps',
  tech: 'With the power of',
  projects: 'Latest projects',
  contact: 'Get in touch',
} as const;
export type TSectionTitleKey = keyof typeof SECTION_TITLES;
export type TSectionTitle =
  (typeof SECTION_TITLES)[TSectionTitleKey];

export const PAGE_TITLES = ['Projects', 'Contact'] as const;
export type TPageTitle = (typeof PAGE_TITLES)[number];
