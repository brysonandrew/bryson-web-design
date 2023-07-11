import { useEffect } from 'react';
import { animate } from 'framer-motion';
import { useX } from './useX';
import { useContext } from '@state/Context';
import { resolveActiveIndex } from './resolveActiveIndex';
import { useLocation, useNavigate } from 'react-router-dom';
import { resolveTo } from '../../../hooks/media/nav/resolveTo';
import { useCurrParams } from '@hooks/params/useCurrParams';
import { TBaseProps } from '../types';

type TConfig = Pick<TBaseProps, 'items' | 'motionX'> & {
  width: number;
};
export const useDrag = ({
  width,
  items,
  motionX,
}: TConfig) => {
  const { name: currName, project: currProject } =
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
        project: currProject,
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
