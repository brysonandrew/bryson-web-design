import type { FC } from 'react';
import { ArrowLeft } from '@components/decoration/icons/gallery/ArrowLeft';
import { usePrev } from '../../../hooks/media/nav/usePrev';
import { TClassValueProps } from '@t/index';
import { Nav } from './Nav';
import { useHoverKey } from '@components/base/cursor/hooks/useHoverKey';
import { resolveParentAnimateConfig } from '@utils/effects';

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
