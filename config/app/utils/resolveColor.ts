import { COLOR_VARIABLES_LOOKUP } from '../colors';
import { TColorRgbKey } from '../colors/types';

export const resolveColor = (
  color: Extract<TColorRgbKey, string>,
  opacity: number,
) =>
  `rgba(${COLOR_VARIABLES_LOOKUP[color]}, ${opacity})`;
