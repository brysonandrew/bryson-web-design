import { InView } from '@components/InView';
import { useDetectGPU } from '@react-three/drei';
import { TChildren } from '@t/index';
import clsx, { ClassValue } from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import type { FC } from 'react';
import { Motion, TChildrenProps } from './Motion';
import { TOptionsConfig } from './hooks/config';

type TProps = TOptionsConfig & {
  classValue?: ClassValue;
  children(props?: TChildrenProps): JSX.Element;
};
export const Fake3D: FC<TProps> = ({
  classValue,
  children,
  ...optionsConfig
}) => {
  const optionsConfigKey = JSON.stringify(optionsConfig);
  const { tier, isMobile } = useDetectGPU();
  if (isMobile) return children();

  switch (tier) {
    case 3: {
      return (
        <InView className={clsx('relative', classValue)}>
          {({ isInView, ref, ...rectProps }) => (
            <>
              <AnimatePresence>
                {isInView ? (
                  <Motion {...rectProps} {...optionsConfig}>
                    {children}
                  </Motion>
                ) : (
                  <motion.div
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
    }
    default: {
      return children();
    }
  }
};
