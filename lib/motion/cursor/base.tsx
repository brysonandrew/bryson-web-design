import { TChildren } from '@brysonandrew/config-types';
import { NOOP } from '@brysonandrew/utils-function';
import {
  useTimeoutRef,
  useEventListener,
} from '@brysonandrew/hooks';
import { type FC, useRef, memo } from 'react';
import { useCursorOffset } from './hooks';
import { useViewportPresence } from './hooks/useViewportPresence';
import { Switch } from './switch';
import { resolveCursorKeyFromHover } from '@brysonandrew/motion-cursor/config/constants';
import { useCursor } from '@brysonandrew/motion-cursor';
import { TScrollContext } from '@brysonandrew/motion-config-types/scroll';

export type TCursorProps = {
  children?: TChildren;
  onTap?(event: PointerEvent): void;
  scroll: TScrollContext['scroll'];
};
const CursorBase: FC<TCursorProps> = memo(
  ({ scroll, onTap, children }) => {
    const {
      hoverKey,
      offsetRef,
      cursor,
      isCursorReady,
      onCursorReady,
    } = useCursor();

    const { timeoutRef } = useTimeoutRef();
    const isOnscreenRef = useRef(false);
    const handler = useCursorOffset(offsetRef);
    const cursorKey = resolveCursorKeyFromHover(hoverKey);

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

CursorBase.displayName = 'CursorBase';

export { CursorBase };

export * from './cursor-provider';
export * from './config/constants';
export * from './config/types';
export * from './utils';
export * from './utils/resolveCompositeHover';
export * from './switch/Box';
export * from './switch/IconWithText';
export * from './switch/Sight';
export * from './switch';
export * from './hooks';
export * from './hooks/useCursorAnimate';
export * from './hooks/useCursorOffset';
export * from './hooks/useHover';
export * from './hooks/useViewportPresence';
export * from './switch/format/Visit';
