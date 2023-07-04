import type { FC } from 'react';
import { ArrowRight } from '@components/icons/ArrowRight';
import { useNext } from '../hooks/nav/useNext';
import { TClassValueProps } from '@t/index';
import { Nav } from './Nav';

type TProps = TClassValueProps & {
  max: number;
};
export const Right: FC<TProps> = ({ max, ...props }) => {
  const to = useNext(max);
  if (!to) return null;
  return <Nav to={to} Icon={ArrowRight} {...props} />;
};
