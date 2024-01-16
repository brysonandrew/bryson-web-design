import { useEffect } from 'react';
import { animate } from 'framer-motion';
import { useViewer as useContext } from '@lib/gallery/viewer/context/useViewer';
import { resolveActiveIndex } from '../utils/resolveActiveIndex';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCurrParams } from '@lib/gallery/viewer/hooks/params/useCurrParams';
import { TBaseProps } from '../types';
import { DURATION_MID } from '@lib/animation/constants';
import { useX } from './motion/useX';
import { resolveTo } from '../utils/resolveTo';

type TConfig = Pick<
  TBaseProps,
  'mediaRecords' | 'motionX'
> & {
  width: number;
};
export const useDrag = ({
  width,
  mediaRecords,
  motionX,
}: TConfig) => {
  const { name: currName, project: currProject } =
    useCurrParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { onMotionBlurEnd } = useContext();
  const nextX = useX({ width, mediaRecords, currName, motionX });

  const handleComplete = onMotionBlurEnd;
  const handleDragTransitionEnd = () => {
    const x = motionX.get();
    const activeIndex = resolveActiveIndex({
      count: mediaRecords.length,
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
