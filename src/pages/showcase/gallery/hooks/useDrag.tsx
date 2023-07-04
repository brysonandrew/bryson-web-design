import { useEffect } from 'react';
import { animate, motion } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import styled from '@emotion/styled';
import { useX } from './useX';
import { useContext } from '@state/Context';
import type { TMedia } from '@pages/showcase/config';

export const Root = styled(motion.footer)``;
export const List = styled(motion.ul)``;

type TConfig = {
  items: TMedia[];
  width: number;
  motionX: MotionValue;
};
export const useDrag = ({
  width,
  items,
  motionX,
}: TConfig) => {
  const { dispatch } = useContext();
  const nextX = useX({ width, items });

  const handleDragStart = () =>
    dispatch({
      type: 'start-drag-gallery', 
      value: null,
    });
  const handleDragEnd = () =>
    dispatch({ type: 'end-drag-gallery', value: null });

  useEffect(() => {
    const subscribe = animate(motionX, nextX, {
      ease: 'easeIn',
      duration: 0.4,
    });
    return subscribe.stop;
  }, [nextX]);

  return {
    onDragStart: handleDragStart,
    onDragTransitionEnd: handleDragEnd,
    drag: 'x' as const,
  };
};
