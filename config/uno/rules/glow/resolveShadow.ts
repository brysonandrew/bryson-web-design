import { TColorRgbKey } from "@lib/types/color";
import { resolveColor } from "@lib/utils/color/resolveColor";

export const resolveShadow = (
  spread: number,
  color: TColorRgbKey = 'white-9',
) =>
  `0px 0px ${spread}px ${resolveColor(
    'white-9',
    0.5,
  )}, 0px 0px ${spread}px ${resolveColor(color, 0.8)}`; 