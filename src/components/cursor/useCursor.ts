import type { PointerEvent } from 'react';
import { useMotionValue } from 'framer-motion';
import { useHover } from '@hooks/useHover';

export const useCursor = <T extends HTMLElement>() => {
  const hoverConfig = useHover();
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const handlePointerMove = ({
    currentTarget,
    clientX,
    clientY,
  }: PointerEvent<T>) => {
    const rect = currentTarget.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    cursorX.set(x);
    cursorY.set(y);
  };

  return {
    cursorX,
    cursorY,
    onPointerMove: handlePointerMove,
    ...hoverConfig,
  };
};
