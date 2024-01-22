import { InView } from '@brysonandrew/in-view';
import clsx, { ClassValue } from 'clsx';
import { motion } from 'framer-motion';
import { type FC } from 'react';
import { Aggregator } from './aggregator';
import {
  EMPTY_PROPS,
  TParallaxMotionChildrenProps,
  TParallaxOptions,
} from './config';
import { PRESENCE_OPACITY } from '@brysonandrew/animation/config/constants';
import { IntersectionOptions } from 'react-intersection-observer';
import { NOOP } from '@brysonandrew/base/constants/functions';
import { isDesktop } from 'react-device-detect';
import { Rect } from '@brysonandrew/base/components/layout/space/Rect';

type TProps = TParallaxOptions & {
  classValue?: ClassValue;
  intersectionOptions?: IntersectionOptions;
  children(
    props: TParallaxMotionChildrenProps,
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
      classValue={clsx('column w-full', classValue)}
      options={{
        triggerOnce: false,
        threshold: 0,
        rootMargin: '280px',
        ...intersectionOptions,
      }}
    >
      {({ inView, entry }) => {
        return (
          <Rect>
            {({ rect, onUpdate }) => {
              if (inView) {
                return (
                  <Aggregator
                    rect={rect}
                    onUpdateRect={
                      entry
                        ? () => onUpdate(entry.target)
                        : NOOP
                    }
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
        );
      }}
    </InView>
  );
};

export * from './config';
export * from './hooks/useDispersion';
export * from './hooks/useResistance';
export * from './hooks/useVisibility';
export * from './aggregator';
export * from './aggregator/useScrollYBounds';
export * from './aggregator/values/Dispersion';
export * from './aggregator/values/Resistance';
export * from './aggregator/values/Visibility';





