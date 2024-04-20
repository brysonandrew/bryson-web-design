import { TFilterAnimateProps } from '@brysonandrew/motion-filter';

export type TInvertConfigOptions = {
  value: number;
  opacity: number;
};
export type TPartialInvertConfigOptions =
  Partial<TInvertConfigOptions>;
export type TInvertConfig = TPartialInvertConfigOptions &
  TFilterAnimateProps;
export const resolveInvertProps = ({
  value = 1,
  opacity = value / 100,
  ...props
}: TInvertConfig) => ({
  style: {
    filter: 'invert(100%)',
  },
  initial: false,
  animate: { opacity },
  ...props,
});
