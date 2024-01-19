import { Cross } from '@brysonandrew/gallery/viewer/icons/Cross';
import type { FC } from 'react';
import { LinkFillCenter } from '@brysonandrew/base/components/interactive/LinkFillCenter';
import {
  TClassValueProps,
  TDivMotionProps,
} from '@brysonandrew/base/types/dom';
import { useTo } from '../hooks/nav/useTo';
import { useHoverKey } from '@brysonandrew/cursor/hooks/useHoverKey';
import { Circle } from '../../components/buttons/Circle';
import { BIG_CURSOR_KEY } from '@brysonandrew/cursor/switch/config';

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
