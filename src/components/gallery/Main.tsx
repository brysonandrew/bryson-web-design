import { type FC } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { TProjectKey } from '@constants/projects';
import { useGallery as useContext } from '@context/domains/gallery';
import { Header } from './Header';
import { Arrows } from './Arrows';
import { Background } from './Background';
import { Footer } from './footer';
import { Sections } from './sections';
import { TBaseProps } from './types';
import { TImageResolverEntries } from '@t/screens';
import { useFreezeScrollBar } from '@hooks/scroll/useFreezeScroll';
import { useMotionX } from '@hooks/gallery/useMotionX';
import { resolveGalleryWidth } from '@hooks/gallery/resolveGalleryWidth';

const Root = styled(motion.div)``;

type TProps = {
  viewportWidth: number;
  currProject: TProjectKey;
};
export const Main: FC<TProps> = ({
  viewportWidth,
  currProject,
}) => {
  useFreezeScrollBar();
  const { screensRecord } = useContext();
  const mediaRecords = screensRecord[currProject];

  const width = resolveGalleryWidth(viewportWidth);
  const count = mediaRecords.length;

  const motionX = useMotionX({
    width: viewportWidth * 0.9,
    mediaRecords,
  });

  const galleryProps: TBaseProps = {
    motionX,
    mediaRecords,
    count,
    width,
  };

  return (
    <Root
      className='cover-fixed column text-color z-20'
      style={{ z: viewportWidth }}
    >
      <Header slug={currProject} />
      <Background />
      <Sections {...galleryProps} />
      <Footer {...galleryProps} />
      <Arrows max={galleryProps.count} />
    </Root>
  );
};
