export const HEADER = 'Header' as const;
export const HEADLINE = 'Headline/Hero' as const;
export const FOOTER = 'Footer' as const;
export const FOUNDATION = [
  HEADER,
  HEADLINE,
  FOOTER,
] as const;

const PerAnum = () => (
  <div className='absolute left-full top-1/2 -translate-y-1/2'>
    per annum
  </div>
);

export type TExtraConfig = [
  key: string,
  price: number,
  max?: number,
];

export const TABLET_SIZE = 'tablet size' as const;
export const MOBILE_SIZE = 'mobile size' as const;
export const ADDITIONAL_CONTENT =
  'Sections' as const;
export const CONTACT_FORM = 'contact form' as const;
export const DARK_MODE = 'dark/light mode' as const;
export const SPLASH_SCREEN = 'splash screen' as const;

export const FOUNDATION_COST = 800;
export const CONTENT_COST = 100;
export const RESPONSIVE_COST = 200;
export const CONTACT_FORM_COST = 200;
export const DARK_MODE_COST = 200;
export const SPLASH_SCREEN_COST = 120;

export const EXTRAS: TExtraConfig[] = [
  [ADDITIONAL_CONTENT, CONTENT_COST, 8],
  [CONTACT_FORM, CONTACT_FORM_COST],
  [DARK_MODE, DARK_MODE_COST],
  [SPLASH_SCREEN, SPLASH_SCREEN_COST],
];

export const ALL = [
  ...FOUNDATION,
  ...EXTRAS.map(([key]) => key),
] as const;

export type TPart = (typeof ALL)[number];

export const YEARLY = [
  ['Web hosting', 60],
  ['Domain registration', 20],
] as const;

export const TOTAL_YEARLY = YEARLY.reduce(
  (a, [, price]) => a + price,
  0,
);
