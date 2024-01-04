export const HEADER = 'header with business title' as const;
export const HEADLINE = 'main headline' as const;
export const SECTION = 'image and text section' as const;
export const FOOTER = 'footer with contact info' as const;
export const BASE = [
  // 'design for your approval',
  HEADER,
  HEADLINE,
  SECTION,
  FOOTER,
] as const;
export type TSection = (typeof BASE)[number];

export const EXTRAS = [
  ['responsive mobile/tablet sizes', 280],
  ['additional sections', 100],
  ['contact form', 200],
  ['blog', 400],
  ['content management system', 400],
  ['dark/light mode', 160],
] as const;

export const YEARLY = [
  ['web hosting', 60],
  ['domain registration from', 20],
] as const;
