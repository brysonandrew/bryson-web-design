import { useState, type FC, useRef } from 'react';
import clsx from 'clsx';
import { Header } from './Header';
import { resolveTitleLayoutId } from '@lib/gallery/config/constants';
import { AnimatePresence, motion } from 'framer-motion';
import {
  TChildren,
  TClassValueProps,
  TDivMotionProps,
} from '@lib/types/dom';
import { P2 } from '@lib/components/layout/space/P2';
import { useCurrProject } from '@lib/gallery/viewer/hooks/params/useCurrProject';
import { useDelayCallback } from '@lib/hooks/window/useDelayCallback';
import { resolveParentAnimateConfig } from '@lib/animation/components/filter-animate/utils';
import { TSlugProps } from '@lib/gallery/config/types';
import { Badge } from '@pages/pricing/badge';
import { PROJECT_ITEMS_RECORD } from '@app/gallery/items';
import { useApp } from '@lib/context/app/useApp';

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
  const { TextureGlow, Texture, BORDER_RADIUS, Active } =
    useApp();
  const { pricing } = PROJECT_ITEMS_RECORD[slug];
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
      {isProject ? <Texture /> : <TextureGlow />}
      <Active classValue='z-20' />
      <P2 />
      <motion.div
        layout={!isTransitioning}
        className='relative left-0 top-0 row-space'
      >
        <Header slug={slug} />
        <AnimatePresence>
          {!isTransitioning && (
            <motion.div
              key={isProject ? 'project' : slug}
              className={clsx(
                'gap-4',
                isProject
                  ? 'column-end lg:row'
                  : 'column-end-reverse lg:row-reverse',
              )}
            >
              <Badge type={pricing} isHover />
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
