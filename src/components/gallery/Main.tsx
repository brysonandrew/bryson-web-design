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
import { TBaseProps, TWidth } from './types';
import { TImageResolverEntries } from '@t/screens';
import { useFreezeScrollBar } from '@hooks/scroll/useFreezeScroll';
import { RADIUS_Z } from '@hooks/media/fake-3D/useZ';
import { useMotionX } from '@hooks/gallery/useMotionX';

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
  const items: TImageResolverEntries = Object.entries(
    projectImageResolverRecord[currProject],
  );

  const motionX = useMotionX({
    width: width.footer,
    items,
  });

  const imageRecord = projectImageRecord[currProject];

  const count = items.length;

  const isReady = width.screen > 0;

  const galleryProps: TBaseProps = {
    motionX,
    items,
    imageRecord,
    count,
    width,
    isReady,
  };

  return (
    <Root
      className='cover-fixed column text-color z-20'
      style={{ z: RADIUS_Z * 2 }}
    >
      <Header isReady={isReady} slug={currProject} />
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
