import type { FC } from 'react';
import { TClassValueProps } from '@brysonandrew/lib/types/dom/main';
import { Nav } from './Nav';
import { useHoverKey } from '@brysonandrew/lib/cursor/hooks/useHoverKey';
import { ArrowRight } from '@brysonandrew/lib/gallery/viewer/icons/ArrowRight';
import { resolveParentAnimateConfig } from '@brysonandrew/lib/animation/components/filter-animate/utils';
import { useNext } from '../hooks/nav/useNext';
import { BIG_CURSOR_KEY } from '@brysonandrew/lib/cursor/switch/config';

type TProps = TClassValueProps & {
  max: number;
};
export const Right: FC<TProps> = ({ max, ...props }) => {
  const to = useNext(max);
  const title = 'Right';
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
      <ArrowRight />
    </Nav>
  );
};
