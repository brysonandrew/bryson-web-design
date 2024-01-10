import { titleToKebab } from '@utils/format';
import { TPageKey, TPageTitle } from './types';

export const SECTION_TITLES = {
  build: 'Building websites and apps',
  services: "Choose a plan that's right for you", //; 'Website Packages', //'What I can help you with',
  tech: 'Powered by',
  projects: 'Previous projects',
  contact: 'Get in touch',
  process: 'Process',
} as const;
export type TSectionTitleKey = keyof typeof SECTION_TITLES;
export type TSectionTitle =
  (typeof SECTION_TITLES)[TSectionTitleKey];

const SERVICES_TITLE = 'Pricing';
const PROJECTS_TITLE = 'Projects';
const CONTACT_TITLE = 'Contact';

export const PAGE_TITLES = [
  SERVICES_TITLE,
  PROJECTS_TITLE,
  CONTACT_TITLE,
] as const;
type TPageTuple = [TPageKey, TPageTitle];
export const PAGE_TUPLES = PAGE_TITLES.map(
  (v) => [titleToKebab(v), v] as TPageTuple,
) as TPageTuple[];
export const PAGE_KEYS = PAGE_TUPLES.map(
  (v) => v[0],
) as TPageKey[];

export const INTRO_ID = 'intro';
export const TECH_ID = 'tech';
export const SERVICES_ID =
  titleToKebab<typeof SERVICES_TITLE>(SERVICES_TITLE);
export const PROJECTS_ID = titleToKebab(PROJECTS_TITLE);
export const CONTACT_ID = titleToKebab(CONTACT_TITLE);

export const HOME_ROUTE = '/';
export const CONTACT_ROUTE = '/contact';
