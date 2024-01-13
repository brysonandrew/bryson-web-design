import { Cross } from '@pages/projects/gallery/icons/Cross';
import type { FC } from 'react';
import { IconLink } from '@lib/components/interactive/IconLink';
import { TClassValueProps, TDivMotionProps } from '@lib/types/dom';
import { useTo } from '../hooks/nav/useTo';
import { useHoverKey } from '@lib/components/cursor/hooks/useHoverKey';
import { Circle } from '../../components/buttons/Circle';

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
