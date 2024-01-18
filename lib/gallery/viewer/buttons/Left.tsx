import type { FC } from 'react';
import { ArrowLeft } from '@lib/gallery/viewer/icons/ArrowLeft';
import { usePrev } from '../hooks/nav/usePrev';
import { TClassValueProps } from '@lib/types/dom/main';
import { Nav } from './Nav';
import { useHoverKey } from '@lib/cursor/hooks/useHoverKey';
import { resolveParentAnimateConfig } from '@lib/animation/components/filter-animate/utils';
import { BIG_CURSOR_KEY } from '@lib/cursor/switch/config';

type TProps = TClassValueProps & {
  max: number;
};
export const Left: FC<TProps> = ({ max, ...props }) => {
  const to = usePrev(max);
  const title = 'Left';
  const { isHover, handlers } = useHoverKey(
    BIG_CURSOR_KEY,
    title,
  );

  if (!to) return null;
  return (
    <Nav
      to={to}
      title={title}
      {...resolveParentAnimateConfig({ isHover })}
      {...handlers}
      {...props}
    >
      <ArrowLeft />
    </Nav>
  );
};
