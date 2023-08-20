import { type FC, useRef, memo } from 'react';
import { NOOP } from '@constants/functions';
import { useEventListener } from '@hooks/events/useEventListener';
import { useContext } from '@state/Context';
import type { TChildren } from '@t/index';
import { useViewportPresence } from './useViewportPresence';
import { Switch } from '@components/cursor/switch';
import { useTimeoutRef } from '@hooks/window/useTimeoutRef';
import { useCursorOffset } from '@hooks/cursor/useCursorOffset';
import { resolveCursorKeyFromHoverKey } from './switch/config';

export type TCursorProps = {
  children?: TChildren;
  onTap?(event: PointerEvent): void;
};
export const Cursor: FC<TCursorProps> = memo(
  ({ onTap, children }) => {
    const {
      hoverKey,
      offsetRef,
      cursor,
      scroll,
      isCursorReady,
      dispatch,
    } = useContext();
    const { timeoutRef } = useTimeoutRef();
    const isOnscreenRef = useRef(false);
    const handler = useCursorOffset(offsetRef);
    const cursorKey =
      resolveCursorKeyFromHoverKey(hoverKey);

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
      const nextX = event.pageX - scroll.x.get();
      const nextY = event.pageY - scroll.y.get();

      handler({ nextX, nextY });

      timeoutRef.current = setTimeout(() => {
        cursor.x.set(nextX);
        cursor.y.set(nextY);
      }, 200);

      if (isOnscreenRef.current && !isCursorReady) {
        dispatch({ type: 'cursor-ready', value: true });
      }
    };

    useEventListener<'pointermove'>(
      'pointermove',
      cursorKey === 'none' ? NOOP : handleMove,
    );

    useViewportPresence({ onPointerEnter, onPointerLeave });

    useEventListener(
      children && onTap ? 'pointerdown' : null,
      onTap ?? NOOP,
    );

    return <>{isCursorReady && <Switch />}</>;
  },
);
