import { T } from '@brysonandrew/animation';

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
  transition: T['0.2/0.08/easeIn'],
  initial: false,
  animate: { opacity },
  ...props,
});
