import { InView } from '@components/InView';
import clsx, { ClassValue } from 'clsx';
import { motion } from 'framer-motion';
import { type FC } from 'react';
import { Aggregator } from './aggregator';
import {
  EMPTY_PROPS,
  TFake3DMotionChildrenProps,
  TFake3DOptions,
} from './config';
import { PRESENCE_OPACITY } from '@constants/animation';
import { IntersectionOptions } from 'react-intersection-observer';
import { NOOP } from '@constants/functions';
import { isDesktop } from 'react-device-detect';
import { Rect } from '@components/space/Rect';

type TProps = TFake3DOptions & {
  classValue?: ClassValue;
  intersectionOptions?: IntersectionOptions;
  children(props: TFake3DMotionChildrenProps): JSX.Element;
};
export const Fake3D: FC<TProps> = ({
  classValue,
  children,
  intersectionOptions = {},
  ...optionsConfig
}) => {
  if (!isDesktop) return children(EMPTY_PROPS);

  return (
    <InView
      classValue={clsx(
        'column w-full',
        classValue,
      )}
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
