import { COLOR_VARS_RECORD } from '../../../app/colors/constants';
import { TColorKey } from '@app/colors/types';

export const resolveShadow = (
  colorKey: TColorKey,
  blur: number,
) => `0 0 ${blur}px ${COLOR_VARS_RECORD[colorKey]}`;
