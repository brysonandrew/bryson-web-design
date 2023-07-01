import { useState, type FC } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValue,
} from 'framer-motion';
import { Close } from './Close';
import { useMediaFromKey } from './hooks/useMediaFromKey';
import { useWidth } from './hooks/useWidth';
import styled from '@emotion/styled';
import { TAppItemKey } from '@constants/apps';
import { Content } from '../list/item/content';
import { Footer } from './footer';
import { Sections } from './sections';
import { createPortal } from 'react-dom';
import { Background } from './Background';
import { useFreezeScrollBar } from '@hooks/useFreezeScroll';

const Root = styled(motion.div)``;

type TProps = {
  selectedPath: TAppItemKey;
};
export const Gallery: FC<TProps> = ({ selectedPath }) => {
  useFreezeScrollBar();
  const [isAnimationDone, setAnimationDone] =
    useState(false);
  const items = useMediaFromKey(selectedPath);
  const motionX = useMotionValue(0);
  const count = items?.length ?? 0;
  const width = useWidth();
  const isReady = width > 0 && count > 0 && isAnimationDone;

  const galleryProps = {
    items,
    motionX,
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
          <div className='absolute left-0 top-0 flex items-center w-full z-10'>
            <Content
              onLayoutAnimationComplete={
                handleLayoutAnimationComplete
              }
              slug={selectedPath}
            />
            <Close />
          </div>
          {isReady ? (
            <>
              <Background />
              <Sections {...galleryProps} />
            </>
          ) : null}
          <Footer key='GALLERY_FOOTER' {...galleryProps} />
        </Root>,
        document.body,
      )}
    </>
  );
};
