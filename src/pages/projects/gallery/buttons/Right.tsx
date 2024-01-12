import type { FC } from 'react';
import { useNext } from '../../../../hooks/media/nav/useNext';
import { TClassValueProps } from '@t/index';
import { Nav } from './Nav';
import { useHoverKey } from '@components/base/cursor/hooks/useHoverKey';
import { ArrowRight } from '@components/decoration/icons/gallery/ArrowRight';
import { resolveParentAnimateConfig } from '@utils/effects';

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
