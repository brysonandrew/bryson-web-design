import { resolveHoverKeyVariations } from '@components/cursor/config';
import { THoverKey } from '@hooks/cursor/config';
import { TOffsetRef } from '@hooks/cursor/useCursorOffset';
import { TMotionPoint } from '@t/animation';

export type TState = ReturnType<
  typeof resolveHoverKeyVariations
> & {
  isCursorReady: boolean;
  hoverKey: THoverKey;
};

export type TContext = TState & {
  offsetRef: TOffsetRef;
  cursor: TMotionPoint;
  cursorLabel: TMotionPoint;
  onHoverKey: (hoverKey: THoverKey) => void;
  onCursorReady: (setCursorReady: boolean) => void;
};
