import { useEffect } from 'react';
import { animate } from 'framer-motion';
import { useViewer as useContext } from '@brysonandrew/gallery';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCurrParams } from '@brysonandrew/gallery/viewer/hooks/params/useCurrParams';
import { TBaseProps } from '../ready/types';
import { DURATION_MID } from '@brysonandrew/animation';
import { useX } from './motion/useX';
import { resolveTo } from '../utils/resolveTo';
import { resolveMarkerIndex } from '../utils/resolveActiveIndex';

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
    const activeIndex = resolveMarkerIndex({
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
