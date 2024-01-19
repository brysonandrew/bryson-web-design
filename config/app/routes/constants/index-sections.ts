import { PAGE_RECORD } from './pages';

export const SECTION_RECORD = {
  build: 'Building websites and apps',
  [PAGE_RECORD.pricing.key]:
    "Choose a plan that's right for you", //; 'Website Packages', //'What I can help you with',
  tech: 'Powered by',
  [PAGE_RECORD.projects.key]: 'Selected works',
  [PAGE_RECORD.contact.key]: 'Get in touch',
} as const;
