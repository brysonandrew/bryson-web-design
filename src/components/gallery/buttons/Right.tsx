import type { FC } from 'react';
import { useNext } from '../../../hooks/media/nav/useNext';
import { TClassValueProps } from '@t/index';
import { Nav } from './Nav';
import { useHoverKey } from '@hooks/cursor/useHoverKey';
import { ArrowRight } from '@components/icons/gallery/ArrowRight';

type TProps = TClassValueProps & {
  max: number;
};
export const Right: FC<TProps> = ({ max, ...props }) => {
  const to = useNext(max);
  const { isHover, handlers } = useHoverKey(
    'big',
    'right',
  );
  if (!to) return null;

  return (
    <Nav
      to={to}
      Icon={ArrowRight}
      title='Right'
      {...props}
      {...handlers}
    />
  );
};
