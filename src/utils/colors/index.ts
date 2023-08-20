import { COLOR_RGB_RECORD } from '@constants/colors';
import { TColorRgbKey } from '@t/colors';

export const resolveColor = (
  color: TColorRgbKey,
  opacity: number,
) => `rgba(${COLOR_RGB_RECORD[color]}, ${opacity})`;
