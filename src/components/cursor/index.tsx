import { useState, type FC, useRef } from 'react';
import { NOOP } from '@constants/functions';
import { useEventListener } from '@hooks/useEventListener';
import { useContext } from '@state/Context';
import type { TChildren } from '@t/index';
import { usePointerEnterLeave } from './usePointerEnterLeave';
import { Switch } from '@components/select/Switch';

const DELAY_FRAMES = 12;

type TPosition = {
  nextX: number;
  nextY: number;
};

type TPositions = TPosition[];

export type TCursorProps = {
  children?: TChildren;
  onTap?(event: PointerEvent): void;
};
export const Cursor: FC<TCursorProps> = ({
  onTap,
  children,
}) => {
  const [isReady, setReady] = useState(false);
  const { cursorX, cursorY, scrollX, scrollY, cursorKey } =
    useContext();
  const positionsRef = useRef<TPositions>([]);

  const cursorOn = (_: PointerEvent) => {
    setReady(true);
  };

  const cursorOff = (_: PointerEvent) => {
    setReady(false);
    positionsRef.current = [];
  };

  const handleMove = (event: PointerEvent) => {
    const index = positionsRef.current.length;
    if (index >= DELAY_FRAMES) {
      const { nextX, nextY } =
        positionsRef.current[index - DELAY_FRAMES];
      cursorX.set(nextX);
      cursorY.set(nextY);
    }

    const nextX = event.pageX - scrollX.get();
    const nextY = event.pageY - scrollY.get();
    positionsRef.current.push({ nextX, nextY });
  };

  useEventListener<'pointermove'>(
    'pointermove',
    handleMove,
  );

  usePointerEnterLeave({ cursorOn, cursorOff });

  useEventListener(
    children && onTap ? 'pointerdown' : null,
    onTap ?? NOOP,
  );

  return <>{isReady && <Switch />}</>;
};
