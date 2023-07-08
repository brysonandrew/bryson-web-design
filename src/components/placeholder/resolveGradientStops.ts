import { TColorKey } from '@t/css';
import * as unoConfig from '@uno/config';
const COLORS = unoConfig.default.theme.colors;

export const resolveGradientStops = (count = 4, colors: TColorKey[]) => {
  return [...Array(count)].map((_, index) => {
    const color = colors[index % colors.length];
    const fraction = 100 * index / (count - 1)
    return `${COLORS[color]} ${fraction}%`;
  }).join(", ");
};
