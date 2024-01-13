import type { FC } from 'react';
import { TClassValueProps } from '@lib/types/dom';
import { Nav } from './Nav';
import { useHoverKey } from '@lib/components/cursor/hooks/useHoverKey';
import { ArrowRight } from '@pages/projects/gallery/icons/ArrowRight';
import { resolveParentAnimateConfig } from '@lib/utils/effect';
import { useNext } from '../hooks/nav/useNext';

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
      {...resolveParentAnimateConfig({ isHover })}
      {...handlers}
      {...props}

    />
  );
};
