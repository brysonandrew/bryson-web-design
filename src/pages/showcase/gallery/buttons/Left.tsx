import type { FC } from 'react';
import { ArrowLeft } from '@components/icons/ArrowLeft';
import { usePrev } from '../hooks/nav/usePrev';
import { TClassValueProps } from '@t/index';
import { Nav } from './Nav';

type TProps = TClassValueProps & {
  max: number;
};
export const Left: FC<TProps> = ({ max, ...props }) => {
  const to = usePrev(max);
  if (!to) return null;
  return <Nav to={to} Icon={ArrowLeft} {...props} />;
};
