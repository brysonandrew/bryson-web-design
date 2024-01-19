import { resolveHoverKeyVariations } from '@brysonandrew/lib/cursor/config';
import { THoverKey } from '@brysonandrew/lib/cursor/hooks/config';
import { TOffsetRef } from '@brysonandrew/lib/cursor/hooks/useCursorOffset';
import { TMotionPoint } from '@brysonandrew/lib/animation/types';
import { TChildren } from '@brysonandrew/lib/types/dom';

export type THover = {
  hoverKey: THoverKey;
  children: TChildren;
};
export type TState = ReturnType<
  typeof resolveHoverKeyVariations
> & {
  isCursorReady: boolean;
};

export type TContext = TState & {
  offsetRef: TOffsetRef;
  cursor: TMotionPoint;
  cursorLabel: TMotionPoint;
  onHoverKey: (hover: THover) => void;
  onCursorReady: (setCursorReady: boolean) => void;
};
