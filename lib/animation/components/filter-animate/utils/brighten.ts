import { MotionValue } from 'framer-motion';
import { TFilterAnimateProps } from '..';

export const resolveBrightness = (value = 100) =>
  `brightness(${value}%)` as const;

export type TBrightenConfigOptions = {
  brightness?: number;
  value?: MotionValue;
};
export type TPartialBrightenConfigOptions =
  Partial<TBrightenConfigOptions> & TFilterAnimateProps;
export const resolveBrightenProps = ({
  brightness = 120,
  value,
  style,
}: TPartialBrightenConfigOptions) => ({
  style: {
    opacity: value ?? 0,
    filter: resolveBrightness(brightness),
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
