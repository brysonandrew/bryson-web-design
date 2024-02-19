import {
  GLOW_DROP,
  GLOW_BOX,
  COLOR_RECORD,
} from '@app/color';
import { GRADIENT_CLASS } from '@app/color/config/pricing';
import { TDefaultStyle } from '@brysonandrew/app';
import { BORDER_RADIUS } from './border-radius';

export const CUSTOM_STYLE = {
  BORDER_RADIUS,
  GLOW_DROP,
  GLOW_BOX,
  COLOR: COLOR_RECORD,
  CLASS: {
    GRADIENT: GRADIENT_CLASS,
  },
} as const;
export type TCustomStyle = typeof CUSTOM_STYLE;
export type TStyle = TDefaultStyle & TCustomStyle;
