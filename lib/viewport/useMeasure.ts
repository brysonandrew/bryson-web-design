import { useState } from 'react';
import { useIsomorphicLayoutEffect } from 'framer-motion';
import { useEventListener } from '@brysonandrew/hooks/events/useEventListener';
import { useTimeoutRef } from '@brysonandrew/hooks/window/useTimeoutRef';

const RESIZE_COOLDOWN = 400;

export const INIT_VIEWPORT = {
  isResizing: false,
};

export type TViewport = {
  isResizing: boolean;
  width?: number;
  height?: number;
};

export const useMeasure = (): TViewport => {
  const [windowSize, setViewport] =
    useState<TViewport>(INIT_VIEWPORT);
  const { timeoutRef, endTimeout } = useTimeoutRef();

  const handleSize = (size?: Partial<TViewport>) => {
    const next = {
      isResizing: false,
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      ...size,
    };

    setViewport(next);
  };

  const handleResize = () => {
    handleSize({
      isResizing: true,
    });
    endTimeout();
    timeoutRef.current = setTimeout(() => {
      handleSize({ isResizing: false });
    }, RESIZE_COOLDOWN);
  };

  useEventListener('resize', handleResize);
  useIsomorphicLayoutEffect(handleSize, []);

  return windowSize;
};
