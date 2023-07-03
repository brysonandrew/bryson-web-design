import type { FC } from 'react';
import { ArrowRight } from '@components/icons/ArrowRight';
import { useNext } from '../hooks/nav/useNext';
import { Button } from './Button';
import { TClassValueProps } from '@t/index';
import { useMoveSound } from '@hooks/sounds/useMoveSound';

type TProps = TClassValueProps & {
  max: number;
};
export const Right: FC<TProps> = ({ max, ...props }) => {
  const to = useNext(max);
  const handleMoveSound = useMoveSound();

  return (
    <Button
      to={to}
      onTap={handleMoveSound}
      Icon={ArrowRight}
      {...props}
    />
  );
};
