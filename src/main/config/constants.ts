import { titleToKebab } from '@utils/format';

export const TITLE_BASE = 'Bryson A.';
export const SECTION_TITLES = {
  build: 'Building websites and apps',
  services: 'Website Packages', //'What I can help you with',
  tech: 'Powered by',
  projects: 'Previous projects',
  contact: 'Get in touch',
  process: 'Process',
} as const;
export type TSectionTitleKey = keyof typeof SECTION_TITLES;
export type TSectionTitle =
  (typeof SECTION_TITLES)[TSectionTitleKey];

const SERVICES_TITLE = 'Services';
const PROJECTS_TITLE = 'Projects';
const CONTACT_TITLE = 'Contact';

export const PAGE_TITLES = [
  SERVICES_TITLE,
  PROJECTS_TITLE,
  CONTACT_TITLE,
] as const;
export type TPageTitle = (typeof PAGE_TITLES)[number];
export const INTRO_ID = 'intro';
export const TECH_ID = 'tech';
export const SERVICES_ID =
  titleToKebab<typeof SERVICES_TITLE>(SERVICES_TITLE);
export const PROJECTS_ID = titleToKebab(PROJECTS_TITLE);
export const CONTACT_ID = titleToKebab(CONTACT_TITLE);

export const HOME_ROUTE = '/';
export const CONTACT_ROUTE = '/contact';
