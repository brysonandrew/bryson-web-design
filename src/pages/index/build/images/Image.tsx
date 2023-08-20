import { motion } from 'framer-motion';
import { type FC } from 'react';
import {
  Link as _Link,
  useNavigate,
} from 'react-router-dom';
import { useDepthStyle } from '../../../../hooks/media/fake-3D/useDepthStyle';
import { RANGE_Z } from '../../../../hooks/media/fake-3D/useZ';
import { useX } from '../../../../hooks/media/fake-3D/useX';
import { Picture } from '@components/picture';
import { useImageDimensions } from '@hooks/media/useImageDimensions';
import { resolveDimensions } from '@hooks/media/resolveDimensions';
import {
  DURATION_MID,
  resolveDynamicMidMotionConfig,
} from '@constants/animation';
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
import { useContext } from '@state/Context';
import { resolveInteractiveLabels } from '@utils/attributes/resolveInteractiveLabels';
import { TMotionImgProps } from '@t/dom';
import styled from '@emotion/styled';
import { resolveParentAnimateConfig } from '@utils/effects';
import { isDesktop } from 'react-device-detect';
import { GALLERY_CURSOR_KEY } from '@components/cursor/switch/config';

export const IMAGE_SIZE = 320;

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
  const { z, ...depthStyle } = useDepthStyle();
  const xStyle = useX({ index, count });
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
    navigate(`${to}#projects`);
    const projectsElement =
      document.getElementById('projects');
    if (projectsElement) {
      projectsElement.scrollIntoView({
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

  const resolveDelay = () => {
    if (name) {
      const n = Number(name);
      if (!isNaN(n)) {
        return Math.abs(index - n) / count;
      }
    }
    return (index / count) * 0.5;
  };
  const delay = resolveDelay();
  const motionConfig = resolveDynamicMidMotionConfig({
    delay,
  });
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
        ...xStyle,
        ...depthStyle,
        zIndex: z,
      }}
      variants={{
        hover: {
          scale: 1.4,
          filter: INIT,
          z: RANGE_Z,
          zIndex: RANGE_Z,
        },
        initial: { opacity: 0, scale: 0 },
        animate: {
          opacity: isLoaded ? 1 : 0,
          z,
          scale: isGallery ? 0.6 : 1,
          transition: {
            ...motionConfig.transition,
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
