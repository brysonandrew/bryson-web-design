import { TChildren } from '@brysonandrew/types/dom';
import { TMotionPoint } from '@brysonandrew/animation';
import { resolveHoverKeyVariations } from '../config';
import { THoverKey } from '../hooks/config';
import { TOffsetRef } from '../hooks/useCursorOffset';

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
