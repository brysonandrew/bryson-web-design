export const HEADER_OFFSET_Y = 240;

import * as unoConfig from '@uno/config';
export const COLORS = unoConfig.default.theme.colors;

export const WHITE_FILTER = {
  filter: 'grayscale(100%) brightness(400%)',
};

export const COLOR_RGB_RECORD = {
  white: '230,227,225',
  gray: '68,68,68',
  'baby-blue': '153,204,255',
  teal: '45,212,191',
  'teal-bright': '202,248,255',
};
export type TColorRgbKey = keyof typeof COLOR_RGB_RECORD;
