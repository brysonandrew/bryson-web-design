import {
  EFFECT_ANIMATE_TRANSITION,
  EFFECT_HOVER_TRANSITION,
} from '.';

export const resolveBrightness = (value: number) =>
  `brightness(${value}%)`;

export type TDimConfigOptions = {
  brightness?: number;
};
export type TPartialDimConfigOptions =
  Partial<TDimConfigOptions>;
export const resolveBrightenProps = ({
  brightness = 120,
}: TDimConfigOptions) => ({
  style: {
    opacity: 0,
    filter: resolveBrightness(brightness),
  },
  variants: {
    animate: {
      opacity: 0,
      transition: EFFECT_ANIMATE_TRANSITION,
    },
    hover: {
      opacity: 1,
      transition: EFFECT_HOVER_TRANSITION,
    },
  },
});
