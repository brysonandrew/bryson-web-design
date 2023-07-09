import { useEffect } from 'react';
import { animate } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import { useX } from './useX';
import { useContext } from '@state/Context';
import { resolveActiveIndex } from './resolveActiveIndex';
import { useLocation, useNavigate } from 'react-router-dom';
import { resolveTo } from './nav/resolveTo';
import { useCurrParams } from '@hooks/params/useCurrParams';
import { TMediaRecord } from '@t/media';

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
  const { name: currName, source: currProject } =
    useCurrParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { dispatch } = useContext();
  const nextX = useX({ width, items, currName, motionX });

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
    if (currProject) {
      const to = resolveTo({
        pathname,
        source: currProject,
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
