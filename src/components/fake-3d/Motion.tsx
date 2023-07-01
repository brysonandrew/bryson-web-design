import { MotionValue, useScroll } from 'framer-motion';
import { TUpdateRectProps } from '@components/InView';
import { useState, type FC, useEffect } from 'react';
import { useDispersion } from './hooks/useDispersion';
import { useResistance } from './hooks/useResistance';
import { useVisibility } from './hooks/useVisibility';
import { useWindowSize } from '@hooks/useWindowSize';
import { TFake3DMotionChildrenProps, TOptionsConfig } from './config';

type TProps = TUpdateRectProps &
  TOptionsConfig & {
    children(props: TFake3DMotionChildrenProps): void;
  };
export const Motion: FC<TProps> = ({
  children,
  dispersion: dispersionRange,
  resistance: resistanceRange,
  visibility: visibilityRange,
  ...rectProps
}) => {
  const { scrollY } = useScroll();
  const windowSize = useWindowSize();
  const top = rectProps.rect?.top ?? 0;
  const windowHeight = windowSize?.height ?? 0;
  const [startScroll, setStart] = useState(0);

  useEffect(() => {
    rectProps.onUpdateRect();
    const { top: bodyTop } =
      document.body.getBoundingClientRect();
    const next = Math.max(0, top - bodyTop - windowHeight);
    setStart(next);
  }, [top, windowHeight]);

  const config = {
    scrollY,
    startScroll,
    windowHeight,
  };

  const dispersion = useDispersion({
    ...config,
    ...dispersionRange,
  });
  const resistance = useResistance({ 
    ...config,
    ...resistanceRange,
  });
  const visibility = useVisibility({
    ...config,
    ...visibilityRange,
  });

  return (
    <>
      {children({
        style: {
          y: resistance,
          rotateX: dispersion,
          filter: visibility,
        },
        rectConfig: rectProps,
      })}
    </>
  );
};
