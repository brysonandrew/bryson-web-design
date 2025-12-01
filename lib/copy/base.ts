import {
  INIT_PROJECT_ITEMS,
  REPURPOSE,
} from '@brysonandrew/copy/items';
import { TTitle } from '@brysonandrew/copy/types';
import { arrToRecord } from '@brysonandrew/utils-object/arrToRecord';
import { TInitItem } from '@brysonandrew/gallery';

export const PACKAGES = [
  'Standard',
  'Plus',
  'Select',
] as const;

export const CONTACT_PHONE = '516 407 953';
export const CONTACT_PHONE_WITH_NATIONAL_TRUNK = `+48${CONTACT_PHONE.replace(/\s/g, '')}`;
export const CONTACT_PHONE_WITH_NATIONAL_TRUNK_DISPLAY = `+48 ${CONTACT_PHONE}`;

export const CONTACT_EMAIL = 'andrew@brysona.dev'; // 'andrew@brysonwebdesign.co.nz';
export const CONTACT_URL = 'www.brysona.dev';

export const CONTACT_FORM_FOOTER = {
  email: CONTACT_EMAIL,
  phone: {
    display: CONTACT_PHONE_WITH_NATIONAL_TRUNK_DISPLAY,
    withTrunk: CONTACT_PHONE_WITH_NATIONAL_TRUNK,
  },
};

const RECORD = arrToRecord<TInitItem<TTitle>, 'title'>(
  INIT_PROJECT_ITEMS,
  'title',
);

export const CV_ITEMS = [
  REPURPOSE,
  RECORD['Insight Factory'],
  RECORD.Juke,
  RECORD.Buzzcast,
];

export const CV_PRESETS_RECORD = {
  LATEST: [
    ...INIT_PROJECT_ITEMS.filter(
      ({ pricing }) => pricing === 'select',
    ).slice(0, 3),
  ],
  MEDIA: [
    RECORD['Insight Factory'],
    RECORD.Juke,
    RECORD.Buzzcast,
  ],
  CRYPTO: [RECORD.Juke, RECORD.Canvas, RECORD.Epirus],
} as const;

type TPresetRecord = typeof CV_PRESETS_RECORD;
export type TPresetName = keyof TPresetRecord;
export type TPresetValue = TPresetRecord[TPresetName];

type TPresetEntry = [TPresetName, TPresetValue];
export type TPresetEntries = TPresetEntry[];

export const CV_PRESETS = Object.entries(
  CV_PRESETS_RECORD,
) as TPresetEntries;

const TEAM_SENTENCE = `Seeking an opportunity to
contribute my technical skills and creativity to a
dynamic team.`;

const LONG_SENTENCE = `Proficient in various
front-end and back-end technologies, I am dedicated to
designing and developing user-centric,
high-performance websites.`;

export const DESCRIPTION_PARAGRAPHS = [
  `(Visit brysona.dev) 8+ years experience in front-end web technologies, specializing in React and Typescript and the frameworks Next.js and Gatsby.`,
];
