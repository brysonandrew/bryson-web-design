import type { FC } from 'react';
import { TClassValueProps } from '@lib/types/dom';
import { Nav } from './Nav';
import { useHoverKey } from '@lib/cursor/hooks/useHoverKey';
import { ArrowRight } from '@pages/projects/gallery/icons/ArrowRight';
import { resolveParentAnimateConfig } from '@lib/animation/components/filter-animate/utils';
import { useNext } from '../hooks/nav/useNext';
import { BIG_CURSOR_KEY } from '@lib/cursor/switch/config';

type TProps = TClassValueProps & {
  max: number;
};
export const Right: FC<TProps> = ({ max, ...props }) => {
  const to = useNext(max);
  const { isHover, handlers } = useHoverKey(
    BIG_CURSOR_KEY,
    'right',
  );
  if (!to) return null;

  return (
    <Nav
      to={to}
      Icon={ArrowRight}
      title='Right'
      {...resolveParentAnimateConfig({ isHover })}
      {...handlers}
      {...props}
    />
  );
};
