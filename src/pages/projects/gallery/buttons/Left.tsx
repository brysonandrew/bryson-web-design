import type { FC } from 'react';
import { ArrowLeft } from '@pages/projects/gallery/icons/ArrowLeft';
import { usePrev } from '../hooks/nav/usePrev';
import { TClassValueProps } from '@lib/types/dom';
import { Nav } from './Nav';
import { useHoverKey } from '@lib/components/cursor/hooks/useHoverKey';
import { resolveParentAnimateConfig } from '@lib/utils/effects';

type TProps = TClassValueProps & {
  max: number;
};
export const Left: FC<TProps> = ({ max, ...props }) => {
  const to = usePrev(max);
  const { isHover, handlers } = useHoverKey('big', 'left');

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
