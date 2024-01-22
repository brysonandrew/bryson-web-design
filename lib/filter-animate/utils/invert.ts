import { EFFECT_ANIMATE_TRANSITION } from "@brysonandrew/animation";

export type TInvertConfigOptions = {
  value: number;
  opacity?: number;
};
export type TPartialInvertConfigOptions =
  TInvertConfigOptions;
export const resolveInvertProps = ({
  value,
  opacity = value / 100,
  ...props
}: TInvertConfigOptions) => ({
  style: {
    filter: 'invert(100%)',
  },
  transition: EFFECT_ANIMATE_TRANSITION,
  initial: false,
  animate: { opacity },
  ...props,
});
