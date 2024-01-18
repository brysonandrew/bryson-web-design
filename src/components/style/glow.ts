import { GLOW_DROP, GLOW_BOX } from '@app/colors/constants';

export const GLOW = {
  DROP: GLOW_DROP,
  ...GLOW_BOX,
} as const;
