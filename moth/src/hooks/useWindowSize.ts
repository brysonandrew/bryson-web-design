import { useRef, useState } from "react";
import { useIsomorphicLayoutEffect } from "framer-motion";
import { useEventListener } from "./useEventListener";

const RESIZE_COOLDOWN = 400;

export type TResizing = boolean | null;

export type TUpdateWindowHandler = () => void;

export type TWindowSize = {
  isResizing: TResizing;
  width: number;
  widthOffset: number;
  height: number;
  handleSize: TUpdateWindowHandler;
} | null;

export const useWindowSize = (): TWindowSize => {
  const [windowSize, setWindowSize] =
    useState<TWindowSize>(null);
  const timerRef = useRef<ReturnType<
    typeof setTimeout
  > | null>(null);


  const handleEndTimeout = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  const handleSize = () => {
    const next = {
      handleSize,
      isResizing: true,
      width: document.documentElement.clientWidth,
      widthOffset:
        window.innerWidth -
        document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    };

    setWindowSize(next);

    handleEndTimeout();
    timerRef.current = setTimeout(() => {
      setWindowSize({ ...next, isResizing: false });
    }, RESIZE_COOLDOWN);
  };

  useEventListener("resize", handleSize);

  useIsomorphicLayoutEffect(() => {
    handleSize();
    return handleEndTimeout;
  }, []);

  return windowSize;
};
