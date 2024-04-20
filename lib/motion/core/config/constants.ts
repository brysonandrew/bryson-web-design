import { TVariantLabels } from '@brysonandrew/motion-core';

export const INITIAL_KEY: TVariantLabels =
  'initial' as const;
export const IDLE_KEY: TVariantLabels = 'idle' as const;
export const HOVER_KEY: TVariantLabels = 'hover' as const;
export const HOVER_VARIANT = [IDLE_KEY, HOVER_KEY];
export const EXIT_KEY: TVariantLabels = 'exit' as const;

export const PLACEHOLDER = '';
export const VALUE_DELIMITER = '|';
export const _VD = VALUE_DELIMITER;
export const SUB_VALUE_DELIMITER = '_';
export const _SVD = SUB_VALUE_DELIMITER;

export const FADE_PREFIX = 'fade';
export const SHIFT_DIRECTIONS = [
  'left',
  'right',
  'up',
  'down',
] as const;

export const ZOOM_TYPES = ['expand', 'shrink'] as const;
export const ZOOM_DIRECTIONS = [
  'height',
  'width',
  'depth',
] as const;

export const ROTATE_TYPES = [
  'roll', // z - (the axis that runs the length of the fuselage
  'pitch', // x - the axis running laterally through the wings
  'yaw', // y - the vertical axis around which the front of the aircraft turns to the left or right whilst its rear turns toward the opposite direction
] as const;

export const ROTATE_DIRECTIONS = [
  'clockwise',
  'anti-clockwise',
] as const;
