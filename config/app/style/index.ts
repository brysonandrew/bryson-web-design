import {
  GLOW_DROP,
  GLOW_BOX,
  COLOR_RECORD,
} from '@app/color';
import { TDefaultStyle } from '@brysonandrew/app';
import { BORDER_RADIUS } from './border-radius';

// const DARK = {
//   COLOR: {
//     accent: COLOR_RECORD.accent,
//   },
// };
export const CUSTOM_STYLE = {
  BORDER_RADIUS,
  GLOW_DROP,
  GLOW_BOX,
  COLOR: {
    ...COLOR_RECORD,
    // accent: COLOR_RECORD['gray-4'],
  },
  // DARK,
} as const;
export type TCustomStyle = typeof CUSTOM_STYLE;
export type TStyle = TDefaultStyle & TCustomStyle;
