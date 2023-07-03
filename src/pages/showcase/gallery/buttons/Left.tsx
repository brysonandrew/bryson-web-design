import type { FC } from 'react';
import { ArrowLeft } from '@components/icons/ArrowLeft';
import { usePrev } from '../hooks/nav/usePrev';
import { Button } from './Button';
import { TClassValueProps } from '@t/index';
import { useMoveSound } from '@hooks/sounds/useMoveSound';

type TProps = TClassValueProps & {
  max: number;
};
export const Left: FC<TProps> = ({ max, ...props }) => {
  const to = usePrev(max);
  const handleMoveSound = useMoveSound();
  return (
    <Button
      to={to}
      onTap={handleMoveSound}
      Icon={ArrowLeft}
      {...props}
    />
  );
};
