export const PACKAGES = [
  'Standard',
  'Plus',
  'Bespoke',
] as const;
export type TPackageTitle = (typeof PACKAGES)[number];
