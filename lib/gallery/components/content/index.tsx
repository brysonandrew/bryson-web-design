import { useState, useRef } from 'react';
import clsx from 'clsx';
import { Header } from './Header';
import { resolveTitleLayoutId } from '@brysonandrew/gallery/config/constants';
import { AnimatePresence, motion } from 'framer-motion';
import {
  TChildren,
  TClassValueProps,
  TDivMotionProps,
} from '@brysonandrew/types/dom';
import { P2 } from '@brysonandrew/space/P2';
import { useCurrProject } from '@brysonandrew/gallery-viewer/hooks/params/useCurrProject';
import { useDelayCallback } from '@brysonandrew/hooks/window/useDelayCallback';
import { resolveParentAnimateConfig } from '@brysonandrew/animation';
import { TSlugProps } from '@brysonandrew/gallery/config/types';
import { useApp } from '@brysonandrew/app';

type TProps<K extends string> = TSlugProps<K> &
  TClassValueProps &
  TDivMotionProps & {
    isHover?: boolean;
    rightHeader: TChildren;
  };
export const Content = <
  T extends string,
  K extends string,
  R extends object,
>({
  isHover,
  slug,
  classValue,
  children,
  rightHeader,
  onLayoutAnimationStart,
  onLayoutAnimationComplete,
  style,
  ...props
}: TProps<K>) => {
  const { Glow, Back, BORDER_RADIUS } = useApp();
  const [isTransitioning, setTransitioning] =
    useState(false);
  const [isExpanding, setExpanding] = useState(false);
  const project = useCurrProject();
  const isProject = Boolean(project);
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
    <motion.div
      key={slug}
      layoutId={resolveTitleLayoutId(slug)}
      layout
      className={clsx(
        'relative w-full pl-6 pr-4 sm:pl-8 sm:pr-6',
        classValue,
      )}
      onLayoutAnimationStart={handleLayoutAnimationStart}
      onLayoutAnimationComplete={
        handleLayoutAnimationComplete
      }
      style={{
        borderRadius: BORDER_RADIUS.MD,
      }}
      {...resolveParentAnimateConfig({ isHover })}
      {...props}
    >
      {isProject ? (
        <Back />
      ) : (
        <>
          {Glow ? (
            <>
              <Glow.Marker classValue='z-50' />
              <Glow.Back />
            </>
          ) : null}
        </>
      )}
      <P2 />
      <motion.div
        layout={!isTransitioning}
        className='relative left-0 top-0 row-space'
      >
        <Header<T, K, R> slug={slug} />
        <AnimatePresence>
          {!isTransitioning && (
            <motion.div
              key={isProject ? 'project' : slug}
              className='column-end gap-4 lg:row'
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
