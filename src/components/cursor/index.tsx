import { type FC, useRef, memo } from 'react';
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
export const Cursor: FC<TCursorProps> = memo(
  ({ onTap, children }) => {
    const {
      cursorX,
      cursorY,
      scrollX,
      scrollY,
      isCursorReady,
      dispatch,
    } = useContext();
    const { timeoutRef } = useTimeoutRef();
    const isOnscreenRef = useRef(false);

    const onPointerEnter = () => {
      isOnscreenRef.current = true;
    };

    const onPointerLeave = () => {
      if (isOnscreenRef.current) {
        dispatch({ type: 'cursor-ready', value: false });
        isOnscreenRef.current = false;
      }
    };

    const handleMove = (event: PointerEvent) => {
      const nextX = event.pageX - scrollX.get();
      const nextY = event.pageY - scrollY.get();

      timeoutRef.current = setTimeout(() => {
        cursorX.set(nextX);
        cursorY.set(nextY);

        if (isOnscreenRef.current && !isCursorReady) {
          dispatch({ type: 'cursor-ready', value: true });
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

    if (isCursorReady) {
      return <Switch />;
    }
    return null;
  },
);
