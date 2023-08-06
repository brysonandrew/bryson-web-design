import { TColorRgbKey, COLOR_RGB_RECORD } from "@constants/colors";

export const resolveColor = (
  color: TColorRgbKey,
  opacity: number,
) => `rgba(${COLOR_RGB_RECORD[color]}, ${opacity})`;

export const resolveWhite = (opacity: number) =>
  resolveColor('white', opacity);
export const resolveGray = (opacity: number) =>
  resolveColor('gray', opacity);
export const resolveBabyBlue = (opacity: number) =>
  resolveColor('baby-blue', opacity);
export const resolveTeal = (opacity: number) =>
  resolveColor('teal', opacity);
export const resolveTealBright = (opacity: number) =>
  resolveColor('teal-bright', opacity);
