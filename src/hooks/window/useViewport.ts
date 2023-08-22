import { useState } from 'react';
import { useIsomorphicLayoutEffect } from 'framer-motion';
import { useEventListener } from '../events/useEventListener';
import { useTimeoutRef } from './useTimeoutRef';

const RESIZE_COOLDOWN = 400;

export const INIT = {
  isResizing: false,
};

export type TViewport = {
  isResizing: boolean;
  width?: number;
  height?: number;
};

export const useViewport = (): TViewport => {
  const [windowSize, seTViewport] =
    useState<TViewport>(INIT);
  const { timeoutRef, endTimeout } = useTimeoutRef();

  const handleSize = (size?: Partial<TViewport>) => {
    const next = {
      isResizing: false,
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      ...size,
    };

    seTViewport(next);
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
