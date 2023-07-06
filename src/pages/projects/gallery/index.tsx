import { useState, type FC } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { useWidth } from './hooks/useWidth';
import styled from '@emotion/styled';
import { TAppItemKey } from '@constants/apps';
import { Footer } from './footer';
import { Sections } from './sections';
import { createPortal } from 'react-dom';
import { Background } from './Background';
import { useDelay } from '@hooks/useDelay';
import { useContext } from '@state/Context';
import {
  TMediaRecord,
  resolveEmptyMedia,
  resolveLoadingItemKey,
} from '../config';
import { Header } from './Header';
import { Arrows } from './Arrows';

const Root = styled(motion.div)``;

type TProps = {
  currSource: TAppItemKey;
};
export const Gallery: FC<TProps> = ({ currSource }) => {
  const { clientImageRecord, screensCountRecord } =
    useContext();
  const items = Object.values(
    clientImageRecord[currSource] ?? {},
  );
  const [isAnimationDone, setAnimationDone] =
    useState(false);
  const motionX = useMotionValue(0);
  const readyCount = items.length ?? 0;
  const count = screensCountRecord[currSource];
  const loadingCount = count - readyCount;

  const { width, isResizing } = useWidth();
  const isDelay = useDelay(400);
  const isReady =
    width.screen > 0 && (isAnimationDone || isDelay);

  const loadingItems: TMediaRecord[] = [...Array(loadingCount)].map(
    (_, index) => ({
      png: resolveEmptyMedia({
        key: resolveLoadingItemKey(index),
        name: `${items.length + index + 1}`,
      }),
    }),
  );

  const galleryProps = {
    items: [...items, ...loadingItems],
    motionX,
    readyCount,
    count,
    width,
    isReady,
  };

  const handleLayoutAnimationComplete = () =>
    setAnimationDone(true);

  return (
    <>
      {createPortal(
        <>
          <Root className='fixed inset-0 flex flex-col z-10'>
            <Header
              key='GALLERY_HEADER'
              onLayoutAnimationComplete={
                handleLayoutAnimationComplete
              }
              slug={currSource}
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
          </Root>
        </>,
        document.body,
      )}
    </>
  );
};
