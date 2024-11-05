import { TChildren } from '@brysonandrew/config-types/dom';
import { resolveHoverVariations } from '@brysonandrew/motion-cursor/utils';
import { TMotionPoint } from '@brysonandrew/motion-config-types';
import {
  THoverKey,
  TOffsetRef,
} from '@brysonandrew/motion-cursor';

export type THover = {
  hoverKey: THoverKey;
  children: TChildren;
};
export type TCursorState = ReturnType<
  typeof resolveHoverVariations
> & {
  isCursorReady: boolean;
};

export type TContext = TCursorState & {
  offsetRef: TOffsetRef;
  cursor: TMotionPoint;
  cursorLabel: TMotionPoint;
  onHover(hover: THover): void;
  onCursorReady(setCursorReady: boolean): void;
};
