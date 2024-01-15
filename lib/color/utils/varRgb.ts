import { TRgb, TRgbaValue } from '../types';

export const varRgb = (
  rgb: TRgb,
  opacityIndex?: number,
): TRgbaValue => {
  if (typeof opacityIndex === 'number') {
    return `rgba(${rgb}, 0.${opacityIndex})`;
  } else {
    return `rgb(${rgb})`;
  }
};
