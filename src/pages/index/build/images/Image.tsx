import { motion } from 'framer-motion';
import {
  type FC,
  useContext as useReactContext,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDepthStyle } from '@hooks/media/fake-3D/useDepthStyle';
import { RADIUS_Z } from '@hooks/media/fake-3D/useZ';
import { Picture } from '@components/picture';
import { useImageDimensions } from '@hooks/media/useImageDimensions';
import { resolveDimensions } from '@hooks/media/resolveDimensions';
import { DURATION_MID } from '@constants/animation';
import { INIT } from '@components/filters/presets';
import { TMediaRecord } from '@t/media';
import { useLoadImage } from '@hooks/media/useLoadImage';
import { useTo } from '@hooks/media/nav/useTo';
import { resolveKey } from '@components/placeholder/resolveKey';
import { Small as Placeholder } from '@components/placeholder/Small';
import { useOnSound } from '@hooks/sounds/useOnSound';
import { useCurrName } from '@hooks/params/useCurrName';
import clsx from 'clsx';
import { useHoverKey } from '@hooks/cursor/useHoverKey';
import { useContext } from '@context/scroll/Context';
import { resolveInteractiveLabels } from '@utils/attributes/resolveInteractiveLabels';
import { TMotionImgProps } from '@t/dom';
import styled from '@emotion/styled';
import { resolveParentAnimateConfig } from '@utils/effects';
import { isDesktop } from 'react-device-detect';
import { GALLERY_CURSOR_KEY } from '@components/cursor/switch/config';
import { resolveMotionConfig } from './resolveMotionConfig';
import { PROJECTS_ID } from '@constants/copy';

export const IMAGE_SIZE = 200;

const Button = styled(motion.button)``;

type TProps = TMotionImgProps & {
  index: number;
  randomIndex: number;
  count: number;
  mediaRecord: TMediaRecord;
};
export const Image: FC<TProps> = (props) => {
  const navigate = useNavigate();
  const { isScroll, isScrolling } = useContext();
  const {
    index,
    count,
    mediaRecord,
    randomIndex,
    ...pictureProps
  } = props;
  const name = useCurrName();

  const { isLoaded, image, imageRef } = useLoadImage(
    mediaRecord.png.src,
  );
  const to = useTo({
    next: mediaRecord.png.name,
    project: mediaRecord.png.project,
  });
  const depthConfig = { index, name, count };
  const { z, ...depthStyle } = useDepthStyle(depthConfig);
  const imageDimensions = resolveDimensions(image);
  const dimensions = useImageDimensions({
    container: { width: IMAGE_SIZE, height: IMAGE_SIZE },
    image: imageDimensions,
  });
  const { isHover, handlers } = useHoverKey(
    GALLERY_CURSOR_KEY,
    'view',
    mediaRecord.png.src,
  );
  const handleGallery = () => {
    navigate(`${to}#${PROJECTS_ID}`);
    const projectsMarker =
      document.getElementById(PROJECTS_ID);
    if (projectsMarker) {
      projectsMarker.scrollIntoView({
        block: 'start',
      });
    }
  };

  const handleOnSound = useOnSound();
  const handleTap = () => {
    if (isHover) {
      handleGallery();
      handleOnSound();
    } else if (!isDesktop) {
      handlers.onHoverStart();
    }
  };

  const isGallery = Boolean(name);
  const isInteractionDisabled =
    isGallery || isScrolling || (isDesktop && isScroll);

  return (
    <motion.li
      className={clsx(
        'absolute',
        isInteractionDisabled && 'pointer-events-none',
      )}
      style={{
        ...depthStyle,
        zIndex: z,
      }}
      variants={{
        hover: {
          scale: 1.4,
          filter: INIT,
          z: RADIUS_Z,
          zIndex: RADIUS_Z,
        },
        initial: { opacity: 0, scale: 0 },
        animate: {
          opacity: isLoaded ? 1 : 0,
          z,
          scale: isGallery ? 0.6 : 1,
          transition: {
            ...resolveMotionConfig(depthConfig).transition,
            duration: DURATION_MID,
          },
        },
        exit: { opacity: 0, scale: 0 },
      }}
      {...resolveParentAnimateConfig({ isHover })}
      {...(isDesktop ? handlers : {})}
    >
      <Button
        className='relative cursor-zoom-in'
        {...resolveInteractiveLabels(
          `View in image gallery`,
        )}
        onTap={handleTap}
      >
        {!isLoaded && (
          <Placeholder key={resolveKey(index)} />
        )}
        <Picture
          imageRef={imageRef}
          mediaRecord={mediaRecord}
          {...pictureProps}
          {...dimensions}
        />
      </Button>
    </motion.li>
  );
};
