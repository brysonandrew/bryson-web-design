import { useState } from "react";
import { useIsomorphicLayoutEffect } from "framer-motion";
import { useEventListener } from "../events/useEventListener";
import { useTimeoutRef } from "./useTimeoutRef";

const RESIZE_COOLDOWN = 400;

const INIT = {
  isResizing: true,
  width: 0,
  height: 0
};

export type TResizing = boolean | null;

export type TUpdateWindowHandler = () => void;

export type TWindowSize = {
  isResizing: TResizing;
  width: number;
  height: number;
};

export const useWindowSize = (): TWindowSize => {
  const [windowSize, setWindowSize] =
    useState<TWindowSize>(INIT);
  const { timeoutRef, endTimeout } = useTimeoutRef();

  const handleSize = () => {
    const next = {
      isResizing: true,
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    };

    setWindowSize(next);

    endTimeout();
    timeoutRef.current = setTimeout(() => {
      setWindowSize({ ...next, isResizing: false });
    }, RESIZE_COOLDOWN);
  };

  useEventListener('resize', handleSize);
  useIsomorphicLayoutEffect(handleSize, []);

  return windowSize;
};
