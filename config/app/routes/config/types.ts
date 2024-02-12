import { SECTION_RECORD } from '@app/routes';

export type TSectionTitleKey = keyof typeof SECTION_RECORD;
export type TSectionTitle =
  (typeof SECTION_RECORD)[TSectionTitleKey];
