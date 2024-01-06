import {
  TPartialInvertConfigOptions,
  resolveInvertProps,
} from '@utils/effects/invert';
import { FilterAnimate, TFilterAnimateProps } from '.';
import { FC } from 'react';
import { TChildrenPartialProps } from '@t/index';

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
