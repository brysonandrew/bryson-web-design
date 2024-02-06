import {
  BASE_COLOR_RECORD,
  BASE_GLOW_RECORD,
} from '@brysonandrew/color';

export const DEFAULT_STYLE = {
  BORDER_RADIUS: {
    SM: 0,
    MD: 0,
    LG: 0,
    XL: 0,
  },
  COLOR: BASE_COLOR_RECORD,
  GRADIENT: {},
  GLOW_DROP: BASE_GLOW_RECORD.drop,
  GLOW_BOX: BASE_GLOW_RECORD.box,
  LAYOUT: {
    BACK: {
      LIGHT: BASE_COLOR_RECORD.white,
      DARK: BASE_COLOR_RECORD.black,
    },
    BACK_1: {
      LIGHT: BASE_COLOR_RECORD['white-5'],
      DARK: BASE_COLOR_RECORD['black-5'],
      BORDER_RADIUS: 0,
    },
    FADE: {
      LIGHT: BASE_COLOR_RECORD['white-04'],
      DARK: BASE_COLOR_RECORD['black-04'],
    },
  },
};
