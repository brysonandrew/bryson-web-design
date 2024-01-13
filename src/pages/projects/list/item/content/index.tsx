import { useState, type FC, useRef } from 'react';
import clsx from 'clsx';
import { Header } from './Header';
import { resolveTitleLayoutId } from '@pages/projects/config/constants/keys';
import { AnimatePresence, motion } from 'framer-motion';
import {
  TChildren,
  TClassValueProps,
  TDivMotionProps,
} from '@lib/types/dom';
import { Mark } from '@components/decoration/mark';
import { P2 } from '@lib/components/layout/space/P2';
import { useCurrProject } from '@pages/projects/gallery/hooks/params/useCurrProject';
import { PRESENCE_OPACITY } from '@lib/constants/animation';
import { useDarkMode } from '@lib/hooks/dark-mode/context';
import { useDelayCallback } from '@lib/hooks/window/useDelayCallback';
import { resolveParentAnimateConfig } from '@lib/utils/effects';
import { Metal } from '@components/decoration/metal';
import { resolveGlow } from './config';
import { TSlugProps } from '@pages/projects/config/types';

type TProps = TSlugProps &
  TClassValueProps &
  TDivMotionProps & {
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
  style,
  ...props
}) => {
  const { isDarkMode } = useDarkMode();
  const [isTransitioning, setTransitioning] =
    useState(false);
  const [isExpanding, setExpanding] = useState(false);
  const project = useCurrProject();
  const isInitRef = useRef(false);
  const borderRadiusClass = 'rounded';

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
    <motion.div
      layoutId={resolveTitleLayoutId(slug)}
      className={clsx(
        'relative w-full',
        'pl-6 pr-4 sm:pl-8 sm:pr-6',
        [isExpanding && 'overflow-hidden'],
        classValue,
        borderRadiusClass,
      )}
      onLayoutAnimationStart={handleLayoutAnimationStart}
      onLayoutAnimationComplete={
        handleLayoutAnimationComplete
      }
      style={{
        ...resolveGlow(Boolean(isHover), isDarkMode),
        ...style,
      }}
      layout
      {...resolveParentAnimateConfig({ isHover })}
      {...props}
    >
      <Metal classValue={borderRadiusClass} />
      <Mark classValue='z-20' />
      <P2 />
      <motion.div
        layout={!isTransitioning}
        className='relative left-0 top-0 row-space'
      >
        <Header slug={slug} />
        <AnimatePresence mode='wait'>
          {!isTransitioning && (
            <motion.div
              key={Boolean(project) ? 'project' : slug}
              className='column-end lg:row'
              {...PRESENCE_OPACITY}
            >
              {rightHeader}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      {children && <>{children}</>}
      <P2 />
    </motion.div>
  );
};
