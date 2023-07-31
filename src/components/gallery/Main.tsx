import { useState, type FC } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { TProjectKey } from '@constants/projects';
import { useDelay } from '@hooks/useDelay';
import { useContext } from '@state/Context';
import { Header } from './Header';
import { Arrows } from './Arrows';
import { Background } from './Background';
import { Footer } from './footer';
import { Sections } from './sections';
import { TBaseProps, TWidth } from './types';
import { TImageResolverEntries } from '@t/screens';
import { useMotionX } from './hooks/useMotionX';
import { useFreezeScrollBar } from '@hooks/scroll/useFreezeScroll';

const Root = styled(motion.div)``;

type TProps = {
  width: TWidth;
  currProject: TProjectKey;
};
export const Main: FC<TProps> = ({
  width,
  currProject,
}) => {
  useFreezeScrollBar();
  const { projectImageResolverRecord, projectImageRecord } =
    useContext();
  const [isAnimationDone, setAnimationDone] =
    useState(false);
  const items: TImageResolverEntries = Object.entries(
    projectImageResolverRecord[currProject],
  );

  const motionX = useMotionX({
    width: width.footer,
    items,
  });

  const imageRecord = projectImageRecord[currProject];

  const count = items.length;

  const isDelay = useDelay(400);
  const isReady =
    width.screen > 0 && (isAnimationDone || isDelay);

  const galleryProps: TBaseProps = {
    motionX,
    items,
    imageRecord,
    count,
    width,
    isReady,
  };

  const handleLayoutAnimationComplete = () =>
    setAnimationDone(true);

  return (
    <Root className='cover-fixed column text-color z-20'>
      <Header
        onLayoutAnimationComplete={
          handleLayoutAnimationComplete
        }
        slug={currProject}
      />
      <>
        {isReady && (
          <>
            <Background />
            <Sections {...galleryProps} />
          </>
        )}  
        <Footer {...galleryProps} />
        {isReady && <Arrows max={galleryProps.count} />}
      </>
    </Root>
  );
};
