import { TColorRgbKey } from '@uno/theme/colors/types';
import { COLOR_RGB_RECORD } from '..';

export const resolveColor = (
  color: TColorRgbKey,
  opacity: number,
) => `rgba(${COLOR_RGB_RECORD[color]}, ${opacity})`;
