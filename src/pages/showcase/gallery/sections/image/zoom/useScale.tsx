import styled from '@emotion/styled';
import { clamp, motion, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useEventListener } from '@hooks/useEventListener';
import {
  CURSOR_SIZE_HALF,
  DELTA_FACTOR,
  WHEEL_DELTA_THRESHOLD,
  TSharedConfig,
  SCALE,
  LOCAL_HOST_SCALE_KEY,
} from './config';
import { useLocalStorage } from '@moth/hooks/useLocalStorage';

export const Root = styled(motion.div)``;

type TConfig = TSharedConfig;
export const useScale = ({
  cursorX,
  cursorY,
  element,
  image,
}: TConfig) => {
  const [savedScale, saveScale] = useLocalStorage<number>(
    LOCAL_HOST_SCALE_KEY,
    SCALE.INIT,
  );
  const [scale, setScale] = useState<number>(savedScale);
  const imageRect = image.getBoundingClientRect();

  const imageWidth = imageRect.width;
  const imageHeight = imageRect.height;

  const copyImageWidth = imageWidth * scale;
  const copyImageHeight = imageHeight * scale;

  const resolveCopyTransform = (v: number) =>
    -(v * scale - CURSOR_SIZE_HALF);
  const copyImageX = useTransform(
    cursorX,
    resolveCopyTransform,
  );
  const copyImageY = useTransform(
    cursorY,
    resolveCopyTransform,
  );

  const resolveClampedScale = (value: number) =>
    clamp(SCALE.MIN, SCALE.MAX, Math.abs(value));

  const handleWheel = ({ deltaY }: WheelEvent) => {
    const handleScale = (prev: number, delta: number) => {
      let next = prev + delta * DELTA_FACTOR;
      next = resolveClampedScale(next);
      return next;
    };

    if (deltaY > WHEEL_DELTA_THRESHOLD) {
      setScale((prev) => handleScale(prev, deltaY));
    }
    if (deltaY < WHEEL_DELTA_THRESHOLD) {
      setScale((prev) => handleScale(prev, deltaY));
    }
  };

  useEventListener<typeof SCALE.TUNE_EVENT, typeof element>(
    SCALE.TUNE_EVENT,
    handleWheel,
    { current: element },
    {
      passive: true,
    },
  );

  const handleClick = () => {
    setScale((prev) => {
      const next = prev * 2;
      if (
        prev === SCALE.MAX ||
        prev === SCALE.MIN ||
        next >= SCALE.MAX ||
        next <= SCALE.MIN
      )
        return SCALE.INIT;
      return next;
    });
  };

  useEventListener<typeof SCALE.JUMP_EVENT, typeof image>(
    SCALE.JUMP_EVENT,
    handleClick,
    { current: image },
  );

  useEffect(() => {
    return () => {
      saveScale(scale);
    };
  }, [scale]);

  return {
    scale,
    style: {
      x: copyImageX,
      y: copyImageY,
      width: copyImageWidth,
      height: copyImageHeight,
    },
  };
};
