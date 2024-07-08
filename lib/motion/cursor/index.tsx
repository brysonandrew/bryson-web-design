import { TChildren } from '@brysonandrew/config-types';
import { type FC, memo } from 'react';
import { useScroll as useScrollContext } from '@brysonandrew/motion-scroll';
import { CursorBase } from '@brysonandrew/motion-cursor/base';

export type TCursorProps = {
  children?: TChildren;
  onTap?(event: PointerEvent): void;
};
export const Cursor: FC<TCursorProps> = memo((props) => {
  const { scroll } = useScrollContext();
  return <CursorBase scroll={scroll} {...props} />;
});

export * from './base';
export * from './cursor-provider';
export * from './hooks';
export * from './hooks/useCursorAnimate';
export * from './hooks/useCursorOffset';
export * from './hooks/useHoverKey';
export * from './hooks/useViewportPresence';
export * from './config/constants';
export * from './config/types';
export * from './utils/calc';
export * from './utils';
export * from './utils/resolveCompositeHoverKey';
export * from './switch/Box';
export * from './switch/IconWithText';
export * from './switch/Sight';
export * from './switch';
export * from './switch/format/Visit';
