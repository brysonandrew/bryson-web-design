import { Cross } from '@components/icons/Cross';
import type { FC } from 'react';
import { useOffSound } from '@hooks/sounds/useOffSound';
import { Button } from '../../buttons/Button';
import { TClassValueProps } from '@t/index';
import { useTo } from '../../../hooks/media/nav/useTo';

type TProps = TClassValueProps;
export const Close: FC<TProps> = (props) => {
  const to = useTo({});
  const handleOffSound = useOffSound();
  const handleClose = () => {
    handleOffSound();
  };

  return (
    <Button
      to={to}
      onClick={handleClose}
      Icon={Cross}
      {...props}
    />
  );
};
