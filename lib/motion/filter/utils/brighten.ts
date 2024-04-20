import { formatFilterBrightness } from '@brysonandrew/css/format/filter/brightness';
import { MotionValue } from 'framer-motion';
import { TFilterAnimateProps } from '..';

export type TBrightenConfigOptions = {
  brightness?: number;
  value?: MotionValue;
};
export type TPartialBrightenConfigOptions =
  Partial<TBrightenConfigOptions> & TFilterAnimateProps;

export type TBrightenConfig =
  TPartialBrightenConfigOptions & TFilterAnimateProps;
export const resolveBrightenProps = ({
  brightness = 120,
  value,
  style,
}: TBrightenConfig) => ({
  style: {
    opacity: value ?? 0,
    filter: formatFilterBrightness(brightness),
    ...style,
  },
  ...(value
    ? {}
    : {
        animate: {
          opacity: 0,
        },
        hover: {
          opacity: 1,
        },
      }),
});
