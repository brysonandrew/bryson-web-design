import { useState, type FC } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { Close } from './Close';
import { useWidth } from './hooks/useWidth';
import styled from '@emotion/styled';
import { TAppItemKey } from '@constants/apps';
import { Content } from '../list/item/content';
import { Footer } from './footer';
import { Sections } from './sections';
import { createPortal } from 'react-dom';
import { Background } from './Background';
import { useDelay } from '@main/useDelay';
import { useContext } from '@state/Context';
import { TMedia, resolveEmptyMedia } from '../config';

const Root = styled(motion.div)``;

type TProps = {
  selectedPath: TAppItemKey;
};
export const Gallery: FC<TProps> = ({ selectedPath }) => {
  const { clientImageRecord, screensCountRecord } =
    useContext();
  const items = Object.values(
    clientImageRecord[selectedPath] ?? {},
  );
  const [isAnimationDone, setAnimationDone] =
    useState(false);
  const motionX = useMotionValue(0);
  const readyCount = items?.length ?? 0;
  const count = screensCountRecord[selectedPath];
  const loadingCount = count - readyCount;
  const width = useWidth();

  const isDelay = useDelay(400);
  const isReady = width > 0 && (isAnimationDone || isDelay);

  const loadingItems: TMedia[] = [
    ...Array(loadingCount),
  ].map((_, index) =>
    resolveEmptyMedia({
      key: `media-${index}`,
      img: `${items.length + index + 1}`,
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
        <Root className='fixed inset-0 z-10'>
          <Background />
          <div className='absolute left-0 top-0 flex items-center w-full z-10'>
            <Content
              onLayoutAnimationComplete={
                handleLayoutAnimationComplete
              }
              slug={selectedPath}
            >
              <Close {...galleryProps} />
            </Content>
          </div>
          {isReady ? <Sections {...galleryProps} /> : null}
          <Footer {...galleryProps} />
        </Root>,
        document.body,
      )}
    </>
  );
};
