import { useState, type FC } from 'react';
import { NOOP } from '@constants/functions';
import { useEventListener } from '@hooks/useEventListener';
import { useContext } from '@state/Context';
import type { TChildren } from '@t/index';
import { usePointerEnterLeave } from './usePointerEnterLeave';
import { Switch } from '@components/select/Switch';
import { useTimeoutRef } from '@hooks/useTimeoutRef';

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
  const { timeoutRef } = useTimeoutRef();

  const cursorOn = (_: PointerEvent) => {
    setReady(true);
  };

  const cursorOff = (_: PointerEvent) => {
    setReady(false);
  };

  const handleMove = (event: PointerEvent) => {
    const nextX = event.pageX - scrollX.get();
    const nextY = event.pageY - scrollY.get();
    timeoutRef.current = setTimeout(() => {
      cursorX.set(nextX);
      cursorY.set(nextY);
    }, 200);
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
