import { resolveHoverKeyVariations } from 'lib/cursor/config';
import { THoverKey } from 'lib/cursor/hooks/config';
import { TOffsetRef } from 'lib/cursor/hooks/useCursorOffset';
import { TMotionPoint } from 'lib/animation/types';
import { TChildren } from 'lib/types/dom';

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
