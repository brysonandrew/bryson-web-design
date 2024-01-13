import { THEME_COLORS } from '@lib/constants/color';
import { TColorKey } from '@lib/types/color';

export const resolveGradientStops = (
  count = 4,
  colors: TColorKey[],
) => {
  return [...Array(count)]
    .map((_, index) => {
      const color = colors[index % colors.length];
      const fraction = (100 * index) / (count - 1);
      return `${THEME_COLORS[color]} ${fraction}%`;
    })
    .join(', ');
};
