import { TRgb } from "../colors/types";

export const varRgb = (
  rgb: TRgb,
  opacityIndex?: number,
) =>
  typeof opacityIndex === 'number'
    ? `rgba(${rgb}, 0.${opacityIndex})`
    : `rgb(${rgb})`;
