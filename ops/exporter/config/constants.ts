import { QUOTE_RX } from '@ops/config/constants';

export const exportsPrefixStr = 'export * from ';
export const exportsPrefixRx = new RegExp(
  'export.*from',
  'gi',
);
export const removeCharsRx = new RegExp(`[;"']`, 'gi');
export const INTERNAL_PREFIX = '@brysonandrew/' as const;

export const DEP_PREFIX_RX = new RegExp(
  /import [*\w\s{},]+ from ['"]/,
  'ig',
);
export const QUOTE_UPDATE_RX = new RegExp(QUOTE_RX, 'ig');
