import { PropsWithChildren, useRef, useState } from 'react';
import type { FC } from 'react';
import { STATE } from './constants';
import { useMotionValue } from 'framer-motion';
import { TCursorOffset } from '@lib/components/cursor/hooks/useCursorOffset';
import { Cursor } from '.';
import { resolveHoverKeyVariations } from '@lib/components/cursor/config';
import { useApp } from '@lib/context/app/useApp';
import { THover } from './types';

export const Provider: FC<PropsWithChildren> = ({
  children,
}) => {
  const { Background } = useApp();
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
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  return (
    <Cursor.Provider
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
        Background,
        ...hoverKeyVariations,
      }}
    >
      {children}
    </Cursor.Provider>
  );
};
