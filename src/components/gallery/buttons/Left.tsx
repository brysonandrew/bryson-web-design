import type { FC } from 'react';
import { ArrowLeft } from '@components/icons/ArrowLeft';
import { usePrev } from '../../../hooks/media/nav/usePrev';
import { TClassValueProps } from '@t/index';
import { Nav } from './Nav';
import { useHoverKey } from '@hooks/useHoverKey';

type TProps = TClassValueProps & {
  max: number;
};
export const Left: FC<TProps> = ({ max, ...props }) => {
  const to = usePrev(max);
  const { isHover, ...handlers } = useHoverKey(
    'big',
    'left',
  );

  if (!to) return null;
  return (
    <Nav
      to={to}
      Icon={ArrowLeft}
      {...props}
      {...handlers}
    />
  );
};
