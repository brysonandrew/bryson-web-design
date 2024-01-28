import { TRANSITION_02_EASEIN_008 } from '@brysonandrew/animation';

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
  transition: TRANSITION_02_EASEIN_008,
  initial: false,
  animate: { opacity },
  ...props,
});
