import { type FC, useRef, memo } from 'react';
import { NOOP } from '@constants/functions';
import { useEventListener } from '@hooks/useEventListener';
import { useContext } from '@state/Context';
import type { TChildren } from '@t/index';
import { useViewportPresence } from './useViewportPresence';
import { Switch } from '@components/select/Switch';
import { useTimeoutRef } from '@hooks/useTimeoutRef';
import { useCursorOffset } from '@hooks/cursor/useCursorOffset';

export type TCursorProps = {
  children?: TChildren;
  onTap?(event: PointerEvent): void;
};
export const Cursor: FC<TCursorProps> = memo(
  ({ onTap, children }) => {
    const {
      hoverKey,
      cursorX,
      cursorY,
      cursorLabelX,
      cursorLabelY,
      offsetRef,
      scrollX,
      scrollY,
      isCursorReady,
      dispatch,
    } = useContext();
    const { timeoutRef } = useTimeoutRef();
    const isOnscreenRef = useRef(false);
    const handler = useCursorOffset(offsetRef);

    const onPointerEnter = () => {
      isOnscreenRef.current = true;
    };

    const onPointerLeave = () => {
      if (isOnscreenRef.current) {
        dispatch({ type: 'cursor-ready', value: false });
        isOnscreenRef.current = false;
      }
    };

    const handleMove = async (event: PointerEvent) => {
      const nextX = event.pageX - scrollX.get();
      const nextY = event.pageY - scrollY.get();

      handler({ nextX, nextY });

      timeoutRef.current = setTimeout(() => {
        cursorX.set(nextX);
        cursorY.set(nextY);
      }, 200);

      if (isOnscreenRef.current && !isCursorReady) {
        dispatch({ type: 'cursor-ready', value: true });
      }
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
