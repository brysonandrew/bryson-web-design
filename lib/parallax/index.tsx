import { InView } from '@brysonandrew/in-view';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { type FC } from 'react';
import { Aggregator } from './aggregator';
import {
  EMPTY_PROPS,
  TPartialParallaxMotionProps,
  TParallaxOptions,
} from './config';
import { PRESENCE_OPACITY } from '@brysonandrew/animation';
import { IntersectionOptions } from 'react-intersection-observer';
import { isDesktop } from 'react-device-detect';
import { Rect } from '@brysonandrew/space/Rect';
import { TClassValueProps } from '@brysonandrew/types';

type TProps = TClassValueProps &
  TParallaxOptions & {
    intersectionOptions?: IntersectionOptions;
    children(
      props: TPartialParallaxMotionProps,
    ): JSX.Element;
  };
export const Parallax: FC<TProps> = ({
  classValue,
  children,
  intersectionOptions = {},
  ...optionsConfig
}) => {
  if (!isDesktop) return children(EMPTY_PROPS);

  return (
    <InView
      classValue={clsx(classValue)}
      options={{
        triggerOnce: false,
        threshold: 0,
        rootMargin: '280px',
        ...intersectionOptions,
      }}
    >
      {({ inView, entry }) => (
        <Rect>
          {({ rect, onUpdate }) => {
            if (inView) {
              return (
                <Aggregator
                  rect={rect}
                  onUpdateRect={() => {
                    if (entry) {
                      onUpdate(entry.target);
                    }
                  }}
                  {...optionsConfig}
                >
                  {children}
                </Aggregator>
              );
            }
            if (typeof rect !== 'undefined') {
              return (
                <motion.div
                  style={{
                    height: rect?.height,
                  }}
                  {...PRESENCE_OPACITY}
                />
              );
            }

            return null;
          }}
        </Rect>
      )}
    </InView>
  );
};

export * from './config';
export * from './aggregator';
export * from './aggregator/useScrollYBounds';
export * from './hooks/useDispersion';
export * from './hooks/useResistance';
export * from './hooks/useVisibility';
export * from './aggregator/values/Dispersion';
export * from './aggregator/values/Resistance';
export * from './aggregator/values/Visibility';
