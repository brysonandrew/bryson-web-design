import { TDefaultStyle } from '@brysonandrew/app';
import {
  COLOR_RECORD,
  GLOW_BOX,
  GLOW_DROP,
} from '../colors/constants';
import { GRADIENT } from './gradient';
import { BORDER_RADIUS } from './border-radius';

export const CUSTOM_STYLE = {
  BORDER_RADIUS,
  GRADIENT,
  GLOW_DROP,
  GLOW_BOX,
  COLOR: COLOR_RECORD,
} as const;
export type TCustomStyle = typeof CUSTOM_STYLE;
export type TStyle = TDefaultStyle & TCustomStyle;
