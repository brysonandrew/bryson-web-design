import { TVariantLabels } from '@brysonandrew/animation/config/types';

export const INITIAL_KEY: TVariantLabels =
  'initial' as const;
export const IDLE_KEY: TVariantLabels = 'idle' as const;
export const HOVER_KEY: TVariantLabels = 'hover' as const;
export const HOVER_VARIANT = [IDLE_KEY, HOVER_KEY];
export const EXIT_KEY: TVariantLabels = 'exit' as const;
