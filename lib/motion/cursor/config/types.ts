import { TChildren } from '@brysonandrew/config-types/dom';
import { resolveHoverKeyVariations } from '@brysonandrew/motion/cursor/utils';
import { TOffsetRef } from '../hooks/useCursorOffset';
import { TMotionPoint } from '@brysonandrew/motion/core/config';
import { THoverKey } from '@brysonandrew/motion/cursor';

export type THover = {
  hoverKey: THoverKey;
  children: TChildren;
};
export type TCursorState = ReturnType<
  typeof resolveHoverKeyVariations
> & {
  isCursorReady: boolean;
};

export type TContext = TCursorState & {
  offsetRef: TOffsetRef;
  cursor: TMotionPoint;
  cursorLabel: TMotionPoint;
  onHoverKey(hover: THover): void;
  onCursorReady(setCursorReady: boolean): void;
};
