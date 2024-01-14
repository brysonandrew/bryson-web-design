import { motion } from 'framer-motion';
import { type FC } from 'react';
import { Picture } from '@lib/components/media/picture';
import { useImageDimensions } from '@lib/hooks/media/useImageDimensions';
import {
  GRAYED_OUT,
  INIT as INIT_FILTER,
} from '@lib/components/filters/config/constants/presets';
import { useCurrName } from '@pages/projects/gallery/hooks/params/useCurrName';
import clsx from 'clsx';
import { useHoverKey } from '@lib/components/cursor/hooks/useHoverKey';
import { resolveInteractiveLabels } from '@lib/utils/attributes/resolveInteractiveLabels';
import { TMotionImgProps } from '@lib/types/dom';
import styled from '@emotion/styled';
import { resolveParentAnimateConfig } from '@lib/utils/effect';
import { isDesktop } from 'react-device-detect';
import { CUSTOM_CURSOR_KEY } from '@lib/components/cursor/switch/config';
import { resolveMotionConfig } from '@lib/hooks/media/resolveMotionConfig';
import {
  TDepthConfig,
  useCircle,
} from '@pages/index/build/images/hooks/useCircle';
import { ORIGIN_50 } from '@lib/constants/animation';
import { useTapHandler } from '@lib/hooks/media/useTapHandler';
import { TMediaRecord } from '@ops/screens/process/config/types';
import { VIEW_ICON } from '@lib/constants/icons';
import { GALLERY_ICON } from '@lib/constants/icons/gallery';

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
  const title = `View in image gallery`;
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
    CUSTOM_CURSOR_KEY,
    mediaRecord.src,
    GALLERY_ICON,
    <div>{title}</div>,
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
        {...resolveInteractiveLabels(title)}
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
