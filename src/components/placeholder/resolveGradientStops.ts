import { TColorKey } from '@t/tailwind';
import COLORS from '@windi/config-colors.json';

export const resolveGradientStops = (count = 4, colors: TColorKey[]) => {
  return [...Array(count)].map((_, index) => {
    const color = colors[index % colors.length];
    return `${COLORS[color]} ${100 * index / count}%`;
  }).join(", ");
};
