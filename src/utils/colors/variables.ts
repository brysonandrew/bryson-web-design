import { TRgb } from '@t/colors';
import { TColorKey } from '@uno/config-colors';

export const resolveColorOpacityVariations = (
  key: TColorKey,
  value: TRgb,
) => {
  return [...Array(10)].reduce((a, _, index) => {
    if (index === 0) {
      return {
        ...a,
        [key]: `rgb(${value})`,
      };
    }
    const next = `rgba(${value}, 0.${index})`;
    return {
      ...a,
      [`${key}-0${index}`]: next,
    };
  }, {});
};

export const resolveColorSeries = (
  key: TColorKey,
  series: (TRgb | null)[],
) => {
  return series.reduce(
    (a, v, index) =>
      v === null
        ? a
        : {
            ...a,
            [index === 0
              ? key
              : `${key}-${index}`]: `rgb(${v})`,
          },
    {},
  );
};
