import { type FC, useRef, memo } from 'react';
import { NOOP } from '@lib/constants/functions';
import { useEventListener } from '@lib/hooks/events/useEventListener';
import { useCursor } from '@lib/cursor/context';
import { useScroll as useScrollContext } from '@lib/context/scroll';
import type { TChildren } from '@lib/types/dom/main';
import { useViewportPresence } from './hooks/useViewportPresence';
import { Switch } from '@lib/cursor/switch';
import { useTimeoutRef } from '@lib/hooks/window/useTimeoutRef';
import { useCursorOffset } from '@lib/cursor/hooks/useCursorOffset';
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
      isCursorReady,
      onCursorReady,
    } = useCursor();
    const { scroll } = useScrollContext();

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
