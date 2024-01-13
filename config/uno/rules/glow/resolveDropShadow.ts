import { TColorRgbKey } from '@lib/types/color';
import { resolveColor } from '@lib/utils/color/resolveColor';

export const resolveDropShadow = (
  spread: number,
  color: TColorRgbKey = 'white-9',
) =>
  `drop-shadow(0px 0px ${spread}px ${resolveColor(
    color,
    0.8,
  )})`;
