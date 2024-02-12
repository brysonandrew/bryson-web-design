import { motion } from 'framer-motion';
import {
  TBaseProps,
  useViewer as useContext,
} from '@brysonandrew/gallery';
import { ViewerHeader } from './header/ViewerHeader';
import { Arrows } from './Arrows';
import { Background } from './Background';
import { Footer } from './footer';
import { Sections } from './sections';
import { useFreezeScrollBar } from '@brysonandrew/hooks-scroll/useFreezeScroll';
import { useMotionX } from '@brysonandrew/gallery-viewer/hooks/motion/useMotionX';
import { resolveGalleryWidth } from '@brysonandrew/gallery-viewer/utils/resolveGalleryWidth';
import { TTTitleToKebab } from '@brysonandrew/config';

export type TReadyProps<T extends string> = {
  viewportWidth: number;
  currProject: TTTitleToKebab<T>;
};
export const Ready = <T extends string>({
  viewportWidth,
  currProject,
}: TReadyProps<T>) => {
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
    <motion.div
      className='fixed inset-0 column'
      style={{ z: viewportWidth, zIndex: 9999 }}
    >
      <ViewerHeader slug={currProject} />
      <Background />
      <Sections {...galleryProps} />
      <Footer {...galleryProps} />
      <div className='fixed top-1/2 left-1/2 -translate-x-1/2 w-shell'>
        <Arrows max={galleryProps.count} />
      </div>
    </motion.div>
  );
};
