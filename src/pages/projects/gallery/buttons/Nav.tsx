import type { FC } from 'react';
import { Button, TButtonProps } from './Button';
import { TClassValueProps } from '@t/index';
import { useMoveSound } from '@hooks/sounds/useMoveSound';
import { useContext } from '@state/Context';

type TProps = TClassValueProps &
  Pick<TButtonProps, 'Icon' | 'to'>;
export const Nav: FC<TProps> = ({ to, Icon, ...props }) => {
  const { dispatch } = useContext();
  const handleMoveSound = useMoveSound();

  const handleTap = () => {
    handleMoveSound();
    dispatch({
      type: 'start-motion-blur',
      value: null,
    });
  };

  return (
    <Button
      to={to}
      onTap={handleTap}
      Icon={Icon}
      {...props}
    />
  );
};
