import { SECTION_RECORD } from '.';

export type TSectionTitleKey = keyof typeof SECTION_RECORD;
export type TSectionTitle =
  (typeof SECTION_RECORD)[TSectionTitleKey];
