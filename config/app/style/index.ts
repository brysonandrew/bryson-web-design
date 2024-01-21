import { TDefaultStyle } from '@brysonandrew/app';
import {
  COLOR_RECORD,
  GLOW_BOX,
  GLOW_DROP,
} from '../colors/constants';
import { GRADIENT } from './gradient';

export const CUSTOM_STYLE = {
  GRADIENT,
  GLOW_DROP,
  GLOW_BOX,
  COLOR: COLOR_RECORD,
} as const;
export type TCustomStyle = typeof CUSTOM_STYLE;
export type TStyle = TDefaultStyle & TCustomStyle;
