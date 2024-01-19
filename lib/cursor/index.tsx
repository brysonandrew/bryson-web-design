import { type FC, useRef, memo } from 'react';
import { NOOP } from '@brysonandrew/base/constants/functions';
import type { TChildren } from '@brysonandrew/base/types/dom/main';
import { useViewportPresence } from './hooks/useViewportPresence';
import { resolveCursorKeyFromHoverKey } from './switch/config';
import { useTimeoutRef, useEventListener } from 'lib/hooks';
import { useCursor } from './context';
import { useCursorOffset } from './hooks/useCursorOffset';
import { Switch } from './switch';
import { useScroll } from 'lib/context/scroll/useScroll';

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
      isCursorReady,
      onCursorReady,
    } = useCursor();
    const { scroll } = useScroll();

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
        onCursorReady(false);
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
        onCursorReady(true);
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
