import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { useGallery as useContext } from '@pages/projects/gallery/context';
import { Header } from './header';
import { Arrows } from './Arrows';
import { Background } from './Background';
import { Footer } from './footer';
import { Sections } from './sections';
import { TBaseProps } from './types';
import { useFreezeScrollBar } from '@lib/hooks/scroll/useFreezeScroll';
import { useMotionX } from '@pages/projects/gallery/hooks/motion/useMotionX';
import { resolveGalleryWidth } from '@pages/projects/gallery/utils/resolveGalleryWidth';

const Root = styled(motion.div)``;

export type TProps<T> = {
  viewportWidth: number;
  currProject: T;
};
export const Ready = <T extends string>({
  viewportWidth,
  currProject,
}: TProps<T>) => {
  useFreezeScrollBar();
  const { screensRecord } = useContext();
  const mediaRecords = screensRecord[currProject];

  const width = resolveGalleryWidth(viewportWidth);
  const count = mediaRecords?.length;

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
      className='fixed inset-0 column text-g-tb z-50'
      style={{ z: viewportWidth, zIndex: 9999 }}
    >
      <Header slug={currProject} />
      <Background />
      <Sections {...galleryProps} />
      <Footer {...galleryProps} />
      <Arrows max={galleryProps.count} />
    </Root>
  );
};
