import { useEffect } from 'react';
import { animate, motion } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import styled from '@emotion/styled';
import { useX } from './useX';
import { useContext } from '@state/Context';
import { TMediaRecord } from '@pages/showcase/config';
import { resolveActiveIndex } from './resolveActiveIndex';
import { useLocation, useNavigate } from 'react-router-dom';
import { resolveTo } from './nav/resolveTo';
import { useCurrName } from '@pages/showcase/useCurrName';

export const Root = styled(motion.footer)``;
export const List = styled(motion.ul)``;

type TConfig = {
  items: TMediaRecord[];
  width: number;
  motionX: MotionValue;
};
export const useDrag = ({
  width,
  items,
  motionX,
}: TConfig) => {
  const currName = useCurrName();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { dispatch } = useContext();
  const nextX = useX({ width, items, currName });

  const handleComplete = () =>
    dispatch({
      type: 'end-motion-blur',
      value: null,
    });
  const handleDragTransitionEnd = () => {
    const x = motionX.get();
    const activeIndex = resolveActiveIndex({
      count: items.length,
      x,
      width,
    });
    if (currName) {
      const to = resolveTo({
        pathname,
        name: currName,
        next: activeIndex,
      });
      navigate(to);
    }
  };

  useEffect(() => {
    const subscribe = animate(motionX, nextX, {
      ease: 'easeIn',
      duration: 0.4,
      onComplete: handleComplete,
    });
    return subscribe.stop;
  }, [nextX]);

  return {
    onDragTransitionEnd: handleDragTransitionEnd,
    drag: 'x' as const,
  };
};
