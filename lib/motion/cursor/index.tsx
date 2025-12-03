import { TChildren } from '@brysonandrew/config-types';
import { type FC, memo } from 'react';
import { useScroll as useScrollContext } from '@brysonandrew/motion-scroll';
import { CursorBase } from '@brysonandrew/motion-cursor/base';

export type TCursorProps = {
  children?: TChildren;
  onTap?(event: PointerEvent): void;
};
const Cursor: FC<TCursorProps> = memo((props) => {
  const { scroll } = useScrollContext();
  return <CursorBase scroll={scroll} {...props} />;
});
Cursor.displayName = 'Cursor';
export { Cursor };
export * from './base';
export * from './cursor-provider';
export * from './config/constants';
export * from './config/types';
export * from './utils/calc';
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
