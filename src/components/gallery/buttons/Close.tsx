import { Cross } from '@components/icons/Cross';
import type { FC } from 'react';
import { Button } from '../../buttons/Button';
import { TClassValueProps } from '@t/index';
import { useTo } from '../../../hooks/media/nav/useTo';
import { useHoverKey } from '@hooks/cursor/useHoverKey';
import { Circle } from '@components/buttons/circle';
import { TMotionDivProps } from '@t/dom';

type TProps = TClassValueProps &
  TMotionDivProps & {
    onClick(): void;
  };
export const Close: FC<TProps> = ({
  onClick,
  ...props
}) => {
  const to = useTo({});
  const { isHover, handlers } = useHoverKey('big', 'close');

  return (
    <Circle classValue='relative' {...props}>
      <Button
        to={to}
        Icon={Cross}
        title='Close'
        onClick={onClick}
        {...handlers}
      />
    </Circle>
  );
};
