import { COLOR_LOOKUP } from '@uno/theme/colors';
import { TColorKey } from '@uno/theme/colors/types';

export const resolveGradientStops = (
  count = 4,
  colors: TColorKey[],
) => {
  return [...Array(count)]
    .map((_, index) => {
      const color = colors[index % colors.length];
      const fraction = (100 * index) / (count - 1);
      return `${COLOR_LOOKUP[color]} ${fraction}%`;
    })
    .join(', ');
};
