import { resolveHoverKeyVariations } from '@components/base/cursor/config';
import { THoverKey } from '@components/base/cursor/hooks/config';
import { TOffsetRef } from '@components/base/cursor/hooks/useCursorOffset';
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
