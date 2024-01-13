import { resolveHoverKeyVariations } from '@lib/components/cursor/config';
import { THoverKey } from '@lib/components/cursor/hooks/config';
import { TOffsetRef } from '@lib/components/cursor/hooks/useCursorOffset';
import { TMotionPoint } from '@lib/types/animation';

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
