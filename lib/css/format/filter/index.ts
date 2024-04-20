
import { formatFilterBlur } from '@brysonandrew/css/format/filter/blur';
import { formatFilterBrightness } from '@brysonandrew/css/format/filter/brightness';
import { formatFilterGrayscale } from '@brysonandrew/css/format/filter/grayscale';

const resolvePart = (
  resolver: (value: number) => string,
  value?: number,
) =>
  typeof value === 'undefined' ? null : resolver(value);

type TConfig = {
  blur?: number;
  brightness?: number;
  grayscale?: number;
};
export const formatFilter = ({
  blur,
  brightness,
  grayscale,
}: TConfig) =>
  [
    resolvePart(formatFilterBlur, blur),
    resolvePart(formatFilterBrightness, brightness),
    resolvePart(formatFilterGrayscale, grayscale),
  ]
    .filter(Boolean)
    .join(' ');
