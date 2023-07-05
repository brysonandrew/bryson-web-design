import { InView } from '@components/InView';
import { useDetectGPU } from '@react-three/drei';
import clsx, { ClassValue } from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import type { FC } from 'react';
import { Aggregator } from './aggregator';
import {
  EMPTY_PROPS,
  TFake3DMotionChildrenProps,
  TOptionsConfig,
} from './config';

type TProps = TOptionsConfig & {
  classValue?: ClassValue;
  children(props: TFake3DMotionChildrenProps): JSX.Element;
};
export const Fake3D: FC<TProps> = ({
  classValue,
  children,
  ...optionsConfig
}) => {
  const { tier, isMobile } = useDetectGPU();
  if (isMobile || tier < 1) return children(EMPTY_PROPS);
  return (
    <InView className={clsx('relative w-full', classValue)}>
      {({ isInView, ref, ...rectProps }) => (
        <>
          <AnimatePresence mode='wait'>
            {isInView ? (
              <Aggregator
                key='AGGREGATOR'
                {...rectProps}
                {...optionsConfig}
              >
                {children}
              </Aggregator>
            ) : (
              <motion.div
                key='PLACEHOLDER'
                style={{
                  height: rectProps.rect?.height,
                }}
              />
            )}
          </AnimatePresence>
        </>
      )}
    </InView>
  );
};
