import { rgbToOpacityRangeRecord } from '../../utils/rgbToOpacityRangeRecord';

export const MAIN_RGBS = {
  secondary: '45, 212, 191',
  highlight: '207, 250, 254',
  accent: '153, 204, 255',
} as const;

export const MAIN_OPACITY_VARIATIONS =
  rgbToOpacityRangeRecord<typeof MAIN_RGBS>(MAIN_RGBS);
