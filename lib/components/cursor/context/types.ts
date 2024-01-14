import { resolveHoverKeyVariations } from '@lib/components/cursor/config';
import { THoverKey } from '@lib/components/cursor/hooks/config';
import { TOffsetRef } from '@lib/components/cursor/hooks/useCursorOffset';
import { TMotionPoint } from '@lib/types/animation';
import { TChildren } from '@lib/types/dom';
import { FC } from 'react';
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
  Background: FC;
  offsetRef: TOffsetRef;
  cursor: TMotionPoint;
  cursorLabel: TMotionPoint;
  onHoverKey: (hover: THover) => void;
  onCursorReady: (setCursorReady: boolean) => void;
};
