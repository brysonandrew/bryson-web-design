import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { useGallery as useContext } from '@context/domains/gallery';
import { Header } from './Header';
import { Arrows } from './Arrows';
import { Background } from './Background';
import { Footer } from './footer';
import { Sections } from './sections';
import { TBaseProps } from './types';
import { useFreezeScrollBar } from '@hooks/scroll/useFreezeScroll';
import { useMotionX } from '@components/gallery/hooks/useMotionX';
import { resolveGalleryWidth } from '@components/gallery/hooks/resolveGalleryWidth';

const Root = styled(motion.div)``;

type TProps<T> = {
  viewportWidth: number;
  currProject: T;
};
export const Main = <T extends string>({
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
      className='fixed inset-0 column text-g-tb z-20'
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
