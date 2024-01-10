import { Cross } from '@components/icons/gallery/Cross';
import type { FC } from 'react';
import { IconLink } from '../../interactive/IconLink';
import { TClassValueProps } from '@t/index';
import { useTo } from '../../../hooks/media/nav/useTo';
import { useHoverKey } from '@hooks/cursor/useHoverKey';
import { Circle } from '@components/interactive/circle';
import { TDivMotionProps } from '@t/dom';

type TProps = TClassValueProps &
  TDivMotionProps & {
    onClick(): void;
  };
export const Close: FC<TProps> = ({
  onClick,
  ...props
}) => {
  const to = useTo({});
  const { isHover, handlers } = useHoverKey('big', 'close');

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
