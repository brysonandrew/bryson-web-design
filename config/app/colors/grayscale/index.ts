import { GRAY, GRAY_RGB_RECORD } from './gray';
import { WHITE, WHITE_RGB_RECORD } from './white';
import { BLACK, BLACK_RGB_RECORD } from './black';
// import { BLACK, BLACK_RGB_RECORD } from './grayscale/black';
// import { GRAY, GRAY_RGB_RECORD } from './grayscale/gray';
// import { WHITE, WHITE_RGB_RECORD } from './grayscale/white';

export const GRAYSCALE_RGB_RECORD = {
  ...WHITE_RGB_RECORD,
  ...GRAY_RGB_RECORD,
  ...BLACK_RGB_RECORD,
};

export const GRAYSCALE_COLOR_VARIABLES = {
  ...BLACK,
  ...GRAY,
  ...WHITE,
} as const;
