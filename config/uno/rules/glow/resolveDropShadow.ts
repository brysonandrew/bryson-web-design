import { TColorRgbKey } from '@uno/theme/colors/types';
import { resolveColor } from '@uno/theme/colors/utils/resolveColor';

export const resolveDropShadow = (
  spread: number,
  color: TColorRgbKey = 'white-9',
) =>
  `drop-shadow(0px 0px ${spread}px ${resolveColor(
    color,
    0.8,
  )})`;
