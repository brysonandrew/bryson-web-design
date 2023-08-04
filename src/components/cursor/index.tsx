import { useState, type FC, useRef } from 'react';
import { NOOP } from '@constants/functions';
import { useEventListener } from '@hooks/useEventListener';
import { useContext } from '@state/Context';
import type { TChildren } from '@t/index';
import { useViewportPresence } from './useViewportPresence';
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
  const { cursorX, cursorY, scrollX, scrollY } =
    useContext();
  const { timeoutRef } = useTimeoutRef();
  const isOnscreenRef = useRef(false);

  const onPointerEnter = () => {
    isOnscreenRef.current = true;
  };

  const onPointerLeave = () => {
    if (isOnscreenRef.current) {
      setReady(false);
      isOnscreenRef.current = false;
    }
  };

  const handleMove = (event: PointerEvent) => {
    const nextX = event.pageX - scrollX.get();
    const nextY = event.pageY - scrollY.get();

    timeoutRef.current = setTimeout(() => {
      cursorX.set(nextX);
      cursorY.set(nextY);

      if (isOnscreenRef.current) {
        setReady(true);
      }
    }, 200);
  };

  useEventListener<'pointermove'>(
    'pointermove',
    handleMove,
  );

  useViewportPresence({ onPointerEnter, onPointerLeave });

  useEventListener(
    children && onTap ? 'pointerdown' : null,
    onTap ?? NOOP,
  );

  if (isReady) {
    return <Switch />;
  }
  return null;
};
