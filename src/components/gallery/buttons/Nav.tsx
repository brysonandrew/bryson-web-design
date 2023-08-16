import type { FC } from 'react';
import { Button, TButtonProps } from '../../buttons/Button';
import { TClassValueProps, TTitleProps } from '@t/index';
import { useMoveSound } from '@hooks/sounds/useMoveSound';
import { useContext } from '@state/Context';
import { NOOP } from '@constants/functions';
import { isDesktop } from 'react-device-detect';

type TProps = TClassValueProps &
  Pick<TButtonProps, 'Icon' | 'to'> &
  TTitleProps;
export const Nav: FC<TProps> = ({ to, Icon, ...props }) => {
  const { dispatch } = useContext();
  const handleMoveSound = useMoveSound();

  const handleClick = () => {
    handleMoveSound();
    dispatch({
      type: 'start-motion-blur',
      value: null,
    });
  };

  return (
    <Button
      to={to}
      onClick={isDesktop ? handleClick : NOOP}
      Icon={Icon}
      {...props}
    />
  );
};
