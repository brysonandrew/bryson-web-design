export const HEADER = 'header with business title' as const;
export const HEADLINE = 'main headline' as const;
export const SECTION = 'image and text section' as const;
export const FOOTER = 'footer with contact info' as const;
export const BASE = [
  HEADER,
  HEADLINE,
  SECTION,
  FOOTER,
] as const;

const PerAnum = () => (
  <div className='absolute left-full top-1/2 -translate-y-1/2'>
    'per annum'
  </div>
);

export type TExtraConfig = [
  key: string,
  price: number,
  max?: number,
];

export const TABLET_SIZE = 'tablet size' as const;
export const MOBILE_SIZE = 'mobile size' as const;
export const ADDITIONAL_SECTION =
  'additional sections' as const;
export const CONTACT_FORM = 'contact form' as const;
export const DARK_LIGHT_MODE = 'dark/light mode' as const;

export const EXTRAS: TExtraConfig[] = [
  [TABLET_SIZE, 120],
  [MOBILE_SIZE, 180],
  [ADDITIONAL_SECTION, 100, 8],
  [CONTACT_FORM, 200],
  [DARK_LIGHT_MODE, 160],
];

export const ALL = [
  ...BASE,
  ...EXTRAS.map(([key]) => key),
] as const;

export type TPart = (typeof ALL)[number];

export const YEARLY = [
  ['Web hosting', 60],
  ['Domain registration', 20, { prefix: 'starting from ' }],
] as const;

export const TOTAL_YEARLY = YEARLY.reduce(
  (a, [, price]) => a + price,
  0,
);
