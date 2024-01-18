import { PropsWithChildren, useRef, useState } from 'react';
import type { FC } from 'react';
import { useMotionValue } from 'framer-motion';
import { TCursorOffset } from 'lib/cursor/hooks/useCursorOffset';
import { STATE, CURSOR } from './constants';
import { resolveHoverKeyVariations } from 'lib/cursor/config';
import { THover } from './types';

export const Provider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [isCursorReady, setCursorReady] = useState(
    STATE.isCursorReady,
  );
  const [hover, setHoverKey] = useState<THover>(STATE);

  const hoverKeyVariations =
    resolveHoverKeyVariations(hover);

  const offsetRef = useRef<TCursorOffset>({
    x: 1,
    y: -1,
  });
  const cursorLabelX = useMotionValue(0);
  const cursorLabelY = useMotionValue(0);
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
