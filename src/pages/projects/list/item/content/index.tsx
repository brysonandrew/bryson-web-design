import { useState, type FC, useRef } from 'react';
import clsx from 'clsx';
import { Header } from './Header';
import {
  TSlugProps,
  resolveTitleLayoutId,
} from '@pages/projects/config';
import styled from '@emotion/styled';
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
} from 'framer-motion';
import { TChildren, TClassValueProps } from '@t/index';
import { Mark } from '@components/mark';
import { TMotionDivProps } from '@t/dom';
import { Space2 } from '@components/spaces/Space2';
import { useCurrProject } from '@hooks/params/useCurrProject';
import { useDelayCallback } from '@hooks/useDelayCallback';
import { Blur } from '@components/effects/blur';
import { MetalDark } from '@components/metal/MetalDark';
import {
  MOTION_CONFIG,
  PRESENCE_OPACITY,
  SLOW_MOTION_CONFIG,
  TRANSITION,
} from '@constants/animation';
import {
  GLOW_INTERACTIVE_DARK,
  GLOW_INTERACTIVE_LIGHT,
} from '@uno/config-shadows';
import { useContext } from '@state/Context';
import { PARENT_GLOW_PROPS } from '@utils/effects/glow';
import { Glow } from '@components/filter-animate/Glow';

const Root = styled(motion.div)``;

type TProps = TSlugProps &
  TClassValueProps &
  TMotionDivProps & {
    isHover?: boolean;
    rightHeader: TChildren;
  };
export const Content: FC<TProps> = ({
  isHover,
  slug,
  classValue,
  children,
  rightHeader,
  onLayoutAnimationStart,
  onLayoutAnimationComplete,
  ...props
}) => {
  const {
    darkMode: { isDarkMode },
  } = useContext();
  const [isTransitioning, setTransitioning] =
    useState(false);
  const [isExpanding, setExpanding] = useState(false);
  const project = useCurrProject();
  const isInitRef = useRef(false);

  const handleInit = () => {
    isInitRef.current = !project;
  };
  useDelayCallback(handleInit, 100);

  const isTarget = project === slug;

  const handleLayoutAnimationStart = () => {
    if (isHover) {
      setExpanding(true);
    }
    if (
      isTarget ||
      (typeof isHover === 'boolean' &&
        !isHover &&
        !isInitRef.current)
    ) {
      isInitRef.current = true;
      setTransitioning(true);

      if (onLayoutAnimationStart) {
        onLayoutAnimationStart();
      }
    }
  };
  const handleLayoutAnimationComplete = () => {
    setTransitioning(false);
    setExpanding(false);

    if (onLayoutAnimationComplete) {
      onLayoutAnimationComplete();
    }
  };

  return (
    <Root
      layoutId={resolveTitleLayoutId(slug)}
      className={clsx(
        'relative w-full',
        'pl-6 pr-4 md:pl-8 md:pr-6',
        [isExpanding && 'overflow-hidden'],
        classValue,
      )}
      onLayoutAnimationStart={handleLayoutAnimationStart}
      onLayoutAnimationComplete={
        handleLayoutAnimationComplete
      }
      style={{
        boxShadow: isDarkMode
          ? GLOW_INTERACTIVE_DARK
          : GLOW_INTERACTIVE_LIGHT,
      }}
      {...props}
    >
      <MetalDark className='absolute inset-0' />
      <Mark
        classValue={clsx('z-20')}
      />
      <Space2 />
      <motion.div
        layout={!isTransitioning && !isExpanding}
        className={clsx('relative left-0 top-0 row-space')}
      >
        <Header slug={slug} />
        {
          <AnimatePresence>
            {!isTransitioning && (
              <motion.div {...PRESENCE_OPACITY}>
                {rightHeader}
              </motion.div>
            )}
          </AnimatePresence>
        }
      </motion.div>
      {children && <>{children}</>}
      <Space2 />
    </Root>
  );
};
