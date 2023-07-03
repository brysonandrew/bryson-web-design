import { Cross } from '@components/icons/Cross';
import type { FC } from 'react';
import { useOffSound } from '@hooks/sounds/useOffSound';
import { Button } from './Button';
import { TClassValueProps } from '@t/index';
import { useTo } from '../hooks/nav/useTo';

type TProps = TClassValueProps;
export const Close: FC<TProps> = (props) => {
  const to = useTo();
  const handleOnSound = useOffSound();
  const handleClose = () => {
    handleOnSound();
  };

  return (
    <Button
      to={to}
      onTap={handleClose}
      Icon={Cross}
      {...props}
    />
  );
};
