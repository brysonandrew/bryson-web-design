import { useEffect } from 'react';
import { animate, motion } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import styled from '@emotion/styled';
import { useX } from './useX';
import { useContext } from '@state/Context';
import {
  SELECTED_KEY,
  type TMedia,
} from '@pages/showcase/config';
import { resolveActiveIndex } from './resolveActiveIndex';
import {
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { useTo } from './nav/useTo';
import { resolveTo } from './nav/resolveTo';

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
  const [searchParams] = useSearchParams();
  const name = searchParams.get(SELECTED_KEY);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { dispatch } = useContext();
  const nextX = useX({ width, items });

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
    if (name) {
      const to = resolveTo({
        pathname,
        name,
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
