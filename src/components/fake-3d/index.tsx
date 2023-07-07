import { InView } from '@components/InView';
import { isMobile } from 'react-device-detect';
import clsx, { ClassValue } from 'clsx';
import { motion } from 'framer-motion';
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
  if (isMobile) return children(EMPTY_PROPS);
  return (
    <InView className={clsx('relative w-full', classValue)}>
      {({ isInView, ref, ...rectProps }) => (
        <>
          {isInView ? (
            <Aggregator {...rectProps} {...optionsConfig}>
              {children}
            </Aggregator>
          ) : (
            <motion.div
              style={{
                height: rectProps.rect?.height,
              }}
            />
          )}
        </>
      )}
    </InView>
  );
};
