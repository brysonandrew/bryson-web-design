import { Cross } from '@brysonandrew/gallery-viewer/icons/Cross';
import type { FC } from 'react';
import { TDivMotionProps } from '@brysonandrew/config-types/dom';
import { useTo } from '../hooks/nav/useTo';
import { useHover } from '@brysonandrew/motion-cursor';
import { BIG_CURSOR_KEY } from '@brysonandrew/motion-cursor/config/constants';
import {
  Circle,
  LinkFillCenter,
} from '@brysonandrew/interactive';

type TProps = TDivMotionProps & {
  onClick(): void;
};
export const Close: FC<TProps> = ({
  onClick,
  ...props
}) => {
  const to = useTo({});
  const { isHover, handlers } = useHover(
    BIG_CURSOR_KEY,
    'close',
  );

  return (
    <Circle isHover={isHover} {...props}>
      <LinkFillCenter
        to={to}
        title='Close'
        onClick={onClick}
        {...handlers}
      >
        <Cross />
      </LinkFillCenter>
    </Circle>
  );
};
