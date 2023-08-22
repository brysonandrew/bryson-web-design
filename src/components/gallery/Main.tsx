import { type FC } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { TProjectKey } from '@constants/projects';
import { useContext } from '@context/domains/gallery/Context';
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
  const { projectImageResolverRecord, projectImageRecord } =
    useContext();
  const items: TImageResolverEntries = Object.entries(
    projectImageResolverRecord[currProject],
  );
  const width = resolveGalleryWidth(viewportWidth);

  const motionX = useMotionX({
    width: viewportWidth * 0.9,
    items,
  });

  const imageRecord = projectImageRecord[currProject];

  const count = items.length;

  const galleryProps: TBaseProps = {
    motionX,
    items,
    imageRecord,
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
