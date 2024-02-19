import { TRANSITION_02_EASEIN_008 } from '@brysonandrew/animation';
import { TFilterAnimateProps } from '@brysonandrew/filter-animate';

export type TInvertConfigOptions = {
  value: number;
  opacity: number;
};
export type TPartialInvertConfigOptions =
  Partial<TInvertConfigOptions>;
export type TInvertConfig = TPartialInvertConfigOptions &
  TFilterAnimateProps;
export const resolveInvertProps = ({
  value = 0.5,
  opacity = value / 100,
  ...props
}: TInvertConfig) => ({
  style: {
    filter: 'invert(100%)',
  },
  transition: TRANSITION_02_EASEIN_008,
  initial: false,
  animate: { opacity },
  ...props,
});
