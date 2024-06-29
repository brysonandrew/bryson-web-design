import {
  createContext,
  PropsWithChildren,
  useRef,
  useState,
  useContext,
} from 'react';
import type { FC } from 'react';
import { motionValue, useMotionValue } from 'framer-motion';
import { resolveHoverKeyVariations } from '@brysonandrew/motion-cursor/utils';
import { TCursorOffset } from './hooks/useCursorOffset';
import {
  TContext,
  THover,
} from '@brysonandrew/motion-cursor/config/types';
import {
  INIT_CALC,
  resolveCalc,
} from '@brysonandrew/motion-cursor/utils/calc';

export const STATE = {
  isCursorReady: false,
  hoverKey: null,
  children: null,
  hoverKeyParts: [],
  cursorKey: null,
};

export const CONTEXT: TContext = {
  ...STATE,
  onHoverKey: (_: THover) => null,
  onCursorReady: (_: boolean) => null,
  offsetRef: { current: { x: 1, y: 1 } },
  cursorLabel: { x: motionValue(0), y: motionValue(0) },
  cursor: { x: motionValue(0), y: motionValue(0) },
};

const CURSOR = createContext<TContext>(CONTEXT);

export const useCursor = (): TContext =>
  useContext<TContext>(CURSOR);

export const CursorProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [isCursorReady, setCursorReady] = useState(
    STATE.isCursorReady
  );
  const [hover, setHoverKey] = useState<THover>(STATE);

  const hoverKeyVariations =
    resolveHoverKeyVariations(hover);

  const offsetRef = useRef<TCursorOffset>({
    x: 1,
    y: -1,
  });
  const cursorLabelX = useMotionValue(INIT_CALC);
  const cursorLabelY = useMotionValue(INIT_CALC);
  const cursorX = useMotionValue(-999);
  const cursorY = useMotionValue(-999);

  return (
    <CURSOR.Provider
      value={{
        offsetRef,
        cursor: { x: cursorX, y: cursorY },
        cursorLabel: {
          x: cursorLabelX,
          y: cursorLabelY,
        },
        isCursorReady,
        onHoverKey: setHoverKey,
        onCursorReady: setCursorReady,
        ...hoverKeyVariations,
      }}
    >
      {children}
    </CURSOR.Provider>
  );
};
