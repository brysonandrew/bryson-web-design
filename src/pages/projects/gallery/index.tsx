import { useState, type FC } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { useWidth } from './hooks/useWidth';
import styled from '@emotion/styled';
import { TProjectKey } from '@constants/projects';
import { Footer } from './footer';
import { Sections } from './sections';
import { createPortal } from 'react-dom';
import { Background } from './Background';
import { useDelay } from '@hooks/useDelay';
import { useContext } from '@state/Context';
import { Header } from './Header';
import { Arrows } from './Arrows';

const Root = styled(motion.div)``;

type TProps = {
  currProject: TProjectKey;
};
export const Gallery: FC<TProps> = ({ currProject }) => {
  const ctx = useContext();
  const { screensCountRecord } = ctx;
  console.log(ctx);
  // const items = Object.values(
  //   projectImageRecord[currProject] ?? {},
  // );
  const [isAnimationDone, setAnimationDone] =
    useState(false);
  const motionX = useMotionValue(0);
  // const readyCount = items.length ?? 0;
  const count = screensCountRecord[currProject];
  // const loadingCount = count - readyCount;

  const { width, isResizing } = useWidth();
  const isDelay = useDelay(400);
  const isReady =
    width.screen > 0 && (isAnimationDone || isDelay);

  // const loadingItems: TMediaRecord[] = [
  //   ...Array(0),
  // ].map((_, index) => {
  //   const item = resolveEmptyMedia({
  //     key: resolveLoadingItemKey(index),
  //     name: `${items.length + index + 1}`,
  //   });
  //   return {
  //     png: item,
  //     webp: item,
  //   };
  // });

  const galleryProps = {
    // items: [...items, ...loadingItems],
    motionX,
    // readyCount,
    count,
    width,
    isReady,
  };

  const handleLayoutAnimationComplete = () =>
    setAnimationDone(true);

  return (
    <>
      {createPortal(
        <Root className='cover-fixed column z-10'>
          <Header
            onLayoutAnimationComplete={
              handleLayoutAnimationComplete
            }
            slug={currProject}
          />
          {isResizing ? null : (
            <>
              {isReady && (
                <>
                  <Background />
                  <Sections {...galleryProps} />
                </>
              )}
              <Footer {...galleryProps} />
              {isReady && (
                <Arrows max={galleryProps.count} />
              )}
            </>
          )}
        </Root>,
        document.body,
      )}
    </>
  );
};
