import { Cross } from '@pages/projects/gallery/icons/Cross';
import type { FC } from 'react';
import { IconLink } from '@lib/components/interactive/IconLink';
import {
  TClassValueProps,
  TDivMotionProps,
} from '@lib/types/dom';
import { useTo } from '../hooks/nav/useTo';
import { useHoverKey } from '@lib/cursor/hooks/useHoverKey';
import { Circle } from '../../components/buttons/Circle';
import { BIG_CURSOR_KEY } from '@lib/cursor/switch/config';

type TProps = TClassValueProps &
  TDivMotionProps & {
    onClick(): void;
  };
export const Close: FC<TProps> = ({
  onClick,
  ...props
}) => {
  const to = useTo({});
  const { isHover, handlers } = useHoverKey(
    BIG_CURSOR_KEY,
    'close',
  );

  return (
    <Circle isHover={isHover} {...props}>
      <IconLink
        to={to}
        Icon={Cross}
        title='Close'
        onClick={onClick}
        {...handlers}
      />
    </Circle>
  );
};
