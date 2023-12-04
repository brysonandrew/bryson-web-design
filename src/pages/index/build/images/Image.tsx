import { motion } from 'framer-motion';
import { type FC } from 'react';
import { Picture } from '@components/picture';
import { useImageDimensions } from '@hooks/media/useImageDimensions';
import {
  GRAYED_OUT,
  INIT as INIT_FILTER,
} from '@components/filters/presets';
import { TMediaRecord } from 'ops/types/media';
import { useCurrName } from '@hooks/params/useCurrName';
import clsx from 'clsx';
import { useHoverKey } from '@hooks/cursor/useHoverKey';
import { resolveInteractiveLabels } from '@utils/attributes/resolveInteractiveLabels';
import { TMotionImgProps } from '@t/dom';
import styled from '@emotion/styled';
import { resolveParentAnimateConfig } from '@utils/effects';
import { isDesktop } from 'react-device-detect';
import { GALLERY_CURSOR_KEY } from '@components/cursor/switch/config';
import { resolveMotionConfig } from '../../../../hooks/media/resolveMotionConfig';
import {
  TDepthConfig,
  useCircle,
} from '@hooks/media/fake-3D/useCircle';
import { ORIGIN_50 } from '@constants/animation';
import { useTapHandler } from '@hooks/media/useTapHandler';

const Button = styled(motion.button)``;

type TProps = TMotionImgProps & {
  isScrolling: boolean;
  index: number;
  count: number;
  mediaRecord: TMediaRecord;
  depthConfig: TDepthConfig;
};
export const Image: FC<TProps> = (props) => {
  const {
    isScrolling,
    index,
    count,
    mediaRecord,
    depthConfig,
    ...pictureProps
  } = props;
  const name = useCurrName();
  const isGallery = Boolean(name);
  const isInteractionDisabled = isGallery || isScrolling;
  const size = depthConfig.imageSize;

  const circleStyle = useCircle(depthConfig);
  const dimensions = useImageDimensions({
    container: { width: size, height: size },
    image: mediaRecord,
  });

  const { isHover, handlers } = useHoverKey(
    GALLERY_CURSOR_KEY,
    'view',
    mediaRecord.src,
  );

  const handler = useTapHandler({ mediaRecord });

  const handleTap = () => {
    if (isHover) {
      handler();
    } else if (!isDesktop) {
      handlers.onHoverStart();
    }
  };
  return (
    <motion.li
      className={clsx(
        'absolute',
        isInteractionDisabled && 'pointer-events-none',
      )}
      style={{
        filter: isHover ? INIT_FILTER : GRAYED_OUT,
        zIndex: circleStyle.z,
        ...circleStyle,
        ...ORIGIN_50,
      }}
      variants={{
        initial: { opacity: 0 },
        animate: resolveMotionConfig(depthConfig),
        exit: { opacity: 0 },
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
        <Picture
          mediaRecord={mediaRecord}
          {...pictureProps}
          {...dimensions}
        />
      </Button>
    </motion.li>
  );
};
