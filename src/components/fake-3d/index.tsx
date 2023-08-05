import { InView } from '@components/InView';
import { isMobile } from 'react-device-detect';
import clsx, { ClassValue } from 'clsx';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Aggregator } from './aggregator';
import {
  EMPTY_PROPS,
  TFake3DMotionChildrenProps,
  TFake3DOptions,
} from './config';
import { PRESENCE_OPACITY } from '@constants/animation';
import { IntersectionOptions } from 'react-intersection-observer';

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
  if (isMobile) return children(EMPTY_PROPS);
  return (
    <InView
      className={clsx(
        'flex flex-col items-center relative w-full',
        classValue,
      )}
      options={intersectionOptions}
    >
      {({ inView, rect }) => {
        return (
          <>
            {true && (
              <>
                {inView ? (
                  <Aggregator
                    rect={rect}
                    {...optionsConfig}
                  >
                    {children}
                  </Aggregator>
                ) : (
                  <motion.div
                    style={{
                      height: rect?.height ?? 1000,
                    }}
                    {...PRESENCE_OPACITY}
                  />
                )}
              </>
            )}
          </>
        );
      }}
    </InView>
  );
};
