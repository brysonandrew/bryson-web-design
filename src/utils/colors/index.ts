import { COLOR_RGB_RECORD } from '@app/colors';
import { TColorRgbKey } from '@t/colors';

export const resolveColor = (
  color: TColorRgbKey,
  opacity: number,
) => `rgba(${COLOR_RGB_RECORD[color]}, ${opacity})`;
