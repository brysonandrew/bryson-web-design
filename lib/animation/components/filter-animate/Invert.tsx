import {
  TPartialInvertConfigOptions,
  resolveInvertProps,
} from 'lib/animation/components/filter-animate/utils/invert';
import { FilterAnimate, TFilterAnimateProps } from '.';
import { FC } from 'react';
import { TChildrenPartialProps } from 'lib/types/dom/main';

type TProps = TPartialInvertConfigOptions &
  TFilterAnimateProps &
  TChildrenPartialProps;
export const Invert: FC<TProps> = ({
  children,
  ...options
}) => {
  const props = resolveInvertProps(options);
  return (
    <FilterAnimate {...props}>{children}</FilterAnimate>
  );
};
