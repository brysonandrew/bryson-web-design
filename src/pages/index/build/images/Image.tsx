import { motion } from 'framer-motion';
import { type FC } from 'react';
import { Picture } from '@brysonandrew/lib/media/picture';
import { useImageDimensions } from '@brysonandrew/lib/hooks/media/useImageDimensions';
import {
  GRAYED_OUT,
  INIT as INIT_FILTER,
} from '@brysonandrew/lib/filters/config/constants/presets';
import clsx from 'clsx';
import { useHoverKey } from '@brysonandrew/lib/cursor/hooks/useHoverKey';
import { resolveInteractiveLabels } from '@brysonandrew/lib/utils/attributes/resolveInteractiveLabels';
import { TImgMotionProps } from '@brysonandrew/lib/types/dom/motion';
import styled from '@emotion/styled';
import { isDesktop } from 'react-device-detect';
import { CUSTOM_CURSOR_KEY } from '@brysonandrew/lib/cursor/switch/config';
import {
  TPositionConfig,
  useCircle,
} from '@pages/index/build/images/hooks/useCircle';
import { ORIGIN_50 } from '@brysonandrew/lib/animation/constants';
import { useTapHandler } from '@brysonandrew/lib/hooks/media/useTapHandler';
import { TMediaRecord } from '@brysonandrew/lib/media/picture/config/types';
import { GALLERY_ICON } from '@brysonandrew/lib/icons/constants/gallery';
import { useCurrName } from '@brysonandrew/lib/gallery/viewer/hooks/params/useCurrName';

const Button = styled(motion.button)``;

type TProps = TImgMotionProps & {
  isScrolling: boolean;
  index: number;
  count: number;
  mediaRecord: TMediaRecord;
  positionConfig: TPositionConfig;
};
export const Image: FC<TProps> = (props) => {
  const {
    isScrolling,
    index,
    count,
    mediaRecord,
    positionConfig,
    ...pictureProps
  } = props;
  const title = 'View in image gallery';
  const name = useCurrName();
  const isGallery = Boolean(name);
  const isInteractionDisabled = isGallery || isScrolling;
  const size = positionConfig.imageSize;

  const circleStyle = useCircle(positionConfig);
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
      // variants={resolvePresence(
      //   { opacity: 0 },
      //   resolveMotionConfig(positionConfig),
      // )}
      // {...resolveParentAnimateConfig({ isHover })}