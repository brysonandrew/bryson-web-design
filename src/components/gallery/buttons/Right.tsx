import type { FC } from 'react';
import { ArrowRight } from '@components/icons/ArrowRight';
import { useNext } from '../../../hooks/media/nav/useNext';
import { TClassValueProps } from '@t/index';
import { Nav } from './Nav';
import { useHoverKey } from '@hooks/useHoverKey';

type TProps = TClassValueProps & {
  max: number;
};
export const Right: FC<TProps> = ({ max, ...props }) => {
  const to = useNext(max);
  const { isHover, ...handlers } = useHoverKey(
    'big',
    'right',
  );
  if (!to) return null;

  return (
    <Nav
      to={to}
      Icon={ArrowRight}
      {...props}
      {...handlers}
    />
  );
};
