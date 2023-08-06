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
  const [rect, setRect] = useState<TRect>(null);
  return (
    <InView
      className={clsx(
        'flex flex-col items-center relative w-full',
        classValue,
      )}
      options={{
        triggerOnce: true,
        onChange: (inView, entry) => {
          if (inView) {
            const rect =
              entry.target.getBoundingClientRect();
            setRect(rect);
          }
        },
        ...intersectionOptions,
      }}
    >
      {({ inView }) => {
        return (
          <>
            {inView ? (
              <Aggregator rect={rect} {...optionsConfig}>
                {children}
              </Aggregator>
            ) : (
              <motion.div
                style={{
                  height: rect?.height,
                }}
                {...PRESENCE_OPACITY}
              />
            )}
          </>
        );
      }}
    </InView>
  );
};
