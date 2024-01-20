import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { useViewer as useContext } from '@brysonandrew/gallery/viewer/context/useViewer';
import { ViewerHeader } from './header/ViewerHeader';
import { Arrows } from './Arrows';
import { Background } from './Background';
import { Footer } from './footer';
import { Sections } from './sections';
import { TBaseProps } from './types';
import { useFreezeScrollBar } from '@brysonandrew/hooks/scroll/useFreezeScroll';
import { useMotionX } from '@brysonandrew/gallery/viewer/hooks/motion/useMotionX';
import { resolveGalleryWidth } from '@brysonandrew/gallery/viewer/utils/resolveGalleryWidth';
import { useGallery } from '../../context/Provider';

const Root = styled(motion.div)``;

export type TProps<T extends string> = {
  viewportWidth: number;
  currProject: T;
};
export const Ready = <T extends string>({
  viewportWidth,
  currProject,
}: TProps<T>) => {
  useFreezeScrollBar(); 
  const { ITEMS_RECORD } = useGallery();
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
      className='fixed inset-0 column z-50'
      style={{ z: viewportWidth, zIndex: 9999 }}
    >
      <ViewerHeader slug={currProject} />
      <Background />
      <Sections {...galleryProps} />
      <Footer {...galleryProps} />
      <Arrows max={galleryProps.count} />
    </Root>
  );
};
