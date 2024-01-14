import { COLOR_VARS_RECORD } from "@app/colors/constants";
import { TColorKey } from "@app/colors/types";

export const resolveGradientStops = (
  count = 4,
  colors: TColorKey[],
) => {
  return [...Array(count)]
    .map((_, index) => {
      const color = colors[index % colors.length];
      const fraction = (100 * index) / (count - 1);
      return `${COLOR_VARS_RECORD[color]} ${fraction}%`;
    })
    .join(', ');
};
