import { TChildren } from '@brysonandrew/config-types';
import { NOOP } from '@brysonandrew/utils';
import {
  useTimeoutRef,
  useEventListener,
} from '@brysonandrew/hooks';
import { type FC, useRef, memo } from 'react';
import { useCursorOffset } from './hooks';
import { useViewportPresence } from './hooks/useViewportPresence';
import { Switch } from './switch';
import { useScroll as useScrollContext } from '@brysonandrew/motion-scroll';
import { resolveCursorKeyFromHoverKey } from '@brysonandrew/motion-cursor/config/constants';
import { useCursor } from '@brysonandrew/motion-cursor';

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

export * from './CursorProvider';
export * from './config/constants';
export * from './config/types';
export * from './utils';
export * from './utils/resolveCompositeHoverKey';
export * from './switch/Box';
export * from './switch/IconWithText';
export * from './switch/Sight';
export * from './switch';
export * from './switch/format/Visit';
export * from './hooks';
export * from './hooks/useCursorAnimate';
export * from './hooks/useCursorOffset';
export * from './hooks/useHoverKey';
export * from './hooks/useViewportPresence';
