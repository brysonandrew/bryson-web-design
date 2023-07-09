import { useState, type FC } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { useWidth } from './hooks/useWidth';
import styled from '@emotion/styled';
import { TProjectKey } from '@constants/projects';
import { createPortal } from 'react-dom';
import { useDelay } from '@hooks/useDelay';
import { useContext } from '@state/Context';
import { Header } from './Header';
import { Arrows } from './Arrows';
import { Background } from './Background';
import { Footer } from './footer';
import { Sections } from './sections';
import {
  TImageRecord,
  TImageRecordEntries,
} from '@t/screens';

const Root = styled(motion.div)``;

type TProps = {
  currProject: TProjectKey;
};
export const Gallery: FC<TProps> = ({ currProject }) => {
  const { projectImageRecord } = useContext();
  const [isAnimationDone, setAnimationDone] =
    useState(false);
  const motionX = useMotionValue(0);
  const imageRecord: TImageRecord =
    projectImageRecord[currProject];
  const items = Object.entries(
    imageRecord,
  ) as TImageRecordEntries;
  console.log(items);
  const count = items.length;

  const { width, isResizing } = useWidth();
  const isDelay = useDelay(400);
  const isReady =
    width.screen > 0 && (isAnimationDone || isDelay);

  const galleryProps = {
    motionX,
    items,
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
