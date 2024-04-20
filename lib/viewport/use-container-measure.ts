
import { useState } from 'react';
import {
  TDimensionsInit,
  TDimensionsReady,
} from '@brysonandrew/measure';
import { useEventListener } from '@brysonandrew/hooks-events';
import { useTimeoutRef, useDelayCallback } from '@brysonandrew/hooks-window';
import { useIsomorphicLayoutEffect } from 'framer-motion';

const RESIZE_COOLDOWN = 400;

type TPic = TDimensionsInit & {
  isResizing: boolean;
};

export const INIT: TPic = {
  isResizing: false,
  isDimensions: false,
} as const;

type TReady = TDimensionsReady & {
  containerWidth: number;
  isResizing: boolean;
};
export type TContainerMeasure = TPic | TReady;

export const useContainerMeasure =
  (): TContainerMeasure => {
    const [viewport, setContainerMeasure] =
      useState<TContainerMeasure>(INIT);
    const { timeoutRef, endTimeout } =
      useTimeoutRef();

    const handleSize = (
      next?: TPic,
    ) => {
      let isResizing = false;
      if (typeof next !== 'undefined') {
        isResizing = next.isResizing;
      }
      const container =
        document.createElement('div');
      container.className =
        'container';
      document.body.appendChild(
        container,
      );
      const containerWidth =
        container.clientWidth;
      document.body.removeChild(
        container,
      );
      const width =
        document.documentElement
          .clientWidth;
      const height =
        document.documentElement
          .clientHeight;

      const isDimensions =
        typeof containerWidth !==
          'undefined' &&
        typeof width !== 'undefined' &&
        typeof height !== 'undefined';
      if (isDimensions) {
        const ready = {
          ...(next = INIT),
          containerWidth,
          width,
          height,
          isDimensions,
          isResizing,
        } as TReady;
        setContainerMeasure(ready);
        return;
      }

      setContainerMeasure(next ?? INIT);
    };

    const handleResize = () => {
      handleSize({
        ...INIT,
        isResizing: true,
      });
      endTimeout();
      timeoutRef.current = setTimeout(
        () => {
          handleSize(INIT);
        },
        RESIZE_COOLDOWN,
      );
    };

    useDelayCallback(
      handleResize,
      1000,
    );

    useEventListener(
      'resize',
      handleResize,
    );
    useIsomorphicLayoutEffect(
      handleSize,
      [],
    );

    return viewport;
  };
