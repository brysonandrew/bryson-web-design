import { InView } from '@components/InView';
import clsx, { ClassValue } from 'clsx';
import { motion } from 'framer-motion';
import { useState, type FC } from 'react';
import { Aggregator } from './aggregator';
import {
  TFake3DMotionChildrenProps,
  TFake3DOptions,
} from './config';
import { PRESENCE_OPACITY } from '@constants/animation';
import { IntersectionOptions } from 'react-intersection-observer';
import { TRect } from '@t/dom';
import { useRect } from '@hooks/useRect';
import { NOOP } from '@constants/functions';

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
  const { rect, onUpdate } = useRect();

  return (
    <InView
      classValue={clsx(
        'flex flex-col items-center w-full',
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
        if (inView) {
          return (
            <Aggregator
              rect={rect}
              onUpdateRect={() =>
                entry ? onUpdate(entry.target) : NOOP
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
    </InView>
  );
};
