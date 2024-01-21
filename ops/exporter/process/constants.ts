export const APP_PREFIX = '@brysonandrew/' as const;
export type TAppPrefix = typeof APP_PREFIX;
export const DEP_PREFIX = new RegExp(
  /import [\w\s{}]* from ['"]/,
  'ig',
);
export const PACKAGE_JSON_NAME = 'package.json' as const;
export const QUOTE_RX = /['"]/;
export const QUOTE_FWD_SLASH_RX = /['"/]/;

export const QUOTE_JSON = '"';
export const QUOTE = "'";

export const QUOTE_UPDATE_RX = new RegExp(QUOTE_RX, 'ig');
