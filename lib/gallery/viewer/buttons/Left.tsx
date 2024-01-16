import type { FC } from 'react';
import { ArrowLeft } from '@lib/gallery/viewer/icons/ArrowLeft';
import { usePrev } from '../hooks/nav/usePrev';
import { TClassValueProps } from '@lib/types/dom';
import { Nav } from './Nav';
import { useHoverKey } from '@lib/cursor/hooks/useHoverKey';
import { resolveParentAnimateConfig } from '@lib/animation/components/filter-animate/utils';
import { BIG_CURSOR_KEY } from '@lib/cursor/switch/config';

type TProps = TClassValueProps & {
  max: number;
};
export const Left: FC<TProps> = ({ max, ...props }) => {
  const to = usePrev(max);
  const { isHover, handlers } = useHoverKey(
    BIG_CURSOR_KEY,
    'left',
  );

  if (!to) return null;
  return (
    <Nav
      to={to}
      Icon={ArrowLeft}
      title='Left'
      {...resolveParentAnimateConfig({ isHover })}
      {...handlers}
      {...props}
    />
  );
};
