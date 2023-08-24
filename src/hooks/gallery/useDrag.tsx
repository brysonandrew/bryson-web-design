import { useEffect } from 'react';
import { animate } from 'framer-motion';
import { useContext } from '@context/domains/gallery/Context';
import { resolveActiveIndex } from '../../utils/gallery/resolveActiveIndex';
import { useLocation, useNavigate } from 'react-router-dom';
import { resolveTo } from '../media/nav/resolveTo';
import { useCurrParams } from '@hooks/params/useCurrParams';
import { TBaseProps } from '../../components/gallery/types';
import { DURATION_MID } from '@constants/animation';
import { useX } from './useX';

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
      duration: DURATION_MID,
      onComplete: handleComplete,
    });
    return subscribe.stop;
  }, [nextX]);

  return {
    onDragTransitionEnd: handleDragTransitionEnd,
    drag: 'x' as const,
  };
};
