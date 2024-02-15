import { INIT_PROJECT_ITEMS } from '@app/gallery/items';

export const CONTACT_PHONE = '020 4069 8339';
export const CONTACT_PHONE_WITH_NATIONAL_TRUNK = `+64${CONTACT_PHONE.slice(
  1,
).replace(/\s/g, '')}`;

export const CONTACT_EMAIL =
  'andrewbrysonwebdesign@gmail.com'; // 'andrew@brysonwebdesign.co.nz';
export const CONTACT_URL = 'www.brysonwebdesign.co.nz';

export const CONTACT_FORM_FOOTER = {
  email: CONTACT_EMAIL,
  phone: {
    display: CONTACT_PHONE,
    withTrunk: CONTACT_PHONE_WITH_NATIONAL_TRUNK,
  },
};

export const CV_ITEMS = [
  ...INIT_PROJECT_ITEMS.slice(4),
  // RECORD.Juke,
  // RECORD.Canvas,
  // RECORD.Epirus,
];

const TEAM_SENTENCE = `Seeking an opportunity to
contribute my technical skills and creativity to a
dynamic team.`;

const LONG_SENTENCE = `Proficient in various
front-end and back-end technologies, I am dedicated to
designing and developing user-centric,
high-performance websites.`;

export const DESCRIPTION_PARAGRAPHS = [
  `Results-driven and detail-oriented Web Developer with
7 years of experience creating and implementing
innovative web solutions.`,
];
