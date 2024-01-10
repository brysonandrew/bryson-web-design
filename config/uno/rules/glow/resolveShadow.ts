import { TColorRgbKey } from "@uno/theme/colors/types";
import { resolveColor } from "@uno/theme/colors/utils/resolveColor";

export const resolveShadow = (
  spread: number,
  color: TColorRgbKey = 'white-9',
) =>
  `0px 0px ${spread}px ${resolveColor(
    'white-9',
    0.5,
  )}, 0px 0px ${spread}px ${resolveColor(color, 0.8)}`; 