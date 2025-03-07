import { resolveGlowRecord } from '@brysonandrew/color-glow/resolveGlowRecord';
import { BASE_RGB } from '@brysonandrew/color-base';

export const BASE_GLOW_RECORD =
  resolveGlowRecord<typeof BASE_RGB>(BASE_RGB);
