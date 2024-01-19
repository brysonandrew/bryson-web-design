import { resolveBlur } from '@brysonandrew/lib/animation/components/filter-animate/utils/blur';
import { resolveBrightness } from '@brysonandrew/lib/animation/components/filter-animate/utils/brighten';

export const resolveGrayscale = (value = 0) =>
  `grayscale(${value}%)`;

const resolveFilterPart = (
  resolver: (value: number) => string,
  value?: number,
) =>
  typeof value === 'undefined' ? null : resolver(value);

type TConfig = {
  blur?: number;
  brightness?: number;
  grayscale?: number;
};
export const resolveFilter = ({
  blur,
  brightness,
  grayscale,
}: TConfig) =>
  [
    resolveFilterPart(resolveBlur, blur),
    resolveFilterPart(resolveBrightness, brightness),
    resolveFilterPart(resolveGrayscale, grayscale),
  ]
    .filter(Boolean)
    .join(' ');
