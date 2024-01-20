import { BASE_GLOW_RECORD } from '@brysonandrew/config';
import { BORDER_RADIUS } from './border-radius';
import { COLOR } from './color';

export const DEFAULT_STYLE = {
  BORDER_RADIUS,
  COLOR,
  GRADIENT: {},
  GLOW_DROP: BASE_GLOW_RECORD.drop,
  GLOW_BOX: BASE_GLOW_RECORD.box,
} as const;
