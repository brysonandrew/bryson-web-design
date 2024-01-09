export const PACKAGES = [
  'Standard',
  'Plus',
  'Select',
] as const;
export type TPackageTitle = (typeof PACKAGES)[number];
