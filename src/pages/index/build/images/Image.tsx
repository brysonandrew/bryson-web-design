import { motion } from 'framer-motion';
import { type FC } from 'react';
import { Picture } from '@brysonandrew/media/picture';
import { useImageDimensions } from 'lib/measure/hooks/useImageDimensions';
import clsx from 'clsx';
import { useHoverKey } from 'lib/motion/cursor/hooks/useHoverKey';
import { resolveInteractiveLabels } from '@brysonandrew/utils-attributes/resolveInteractiveLabels';
import { TImgMotionProps } from '@brysonandrew/config-types/dom/motion';
import { isDesktop } from 'react-device-detect';
import { CUSTOM_CURSOR_KEY } from '@brysonandrew/motion/cursor/config/constants';
import {
  TPositionConfig,
  useCircle,
} from '@pages/index/build/images/hooks/useCircle';
import { useTapHandler } from '@hooks/useTapHandler';
import { TMediaRecord } from '@brysonandrew/media/config/types';
import { GALLERY_ICON } from '@brysonandrew/icons-keys/gallery';
import { useCurrName } from '@brysonandrew/gallery-viewer/hooks/params/useCurrName';
import { ORIGIN_50 } from '@pages/index/build/config/constants';
import { GRAYED_OUT, INIT } from '@brysonandrew/css-format';

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
  const size = positionConfig.imageSize;

  const circleStyle = useCircle(positionConfig);
  const dimensions = useImageDimensions({
    box: { width: size, height: size },
    image: mediaRecord,
  });

  const { isHover, handlers } = useHoverKey(
    CUSTOM_CURSOR_KEY,
    mediaRecord.src,
    GALLERY_ICON,
    <div>{title}</div>
  );

  const { isExiting, handler } = useTapHandler({
    mediaRecord,
  });

  const isInteractionDisabled =
    isGallery || isScrolling || isExiting;

  const handleTap = () => {
    if (isHover) {
      handler();
    } else if (!isDesktop) {
      handlers.onMouseEnter();
    }
  };

  return (
    <motion.li
      className={clsx(
        'absolute',
        isInteractionDisabled && 'pointer-events-none'
      )}
      style={{
        filter:
          isHover && !isInteractionDisabled
            ? INIT
            : GRAYED_OUT,
        ...(isExiting ? { opacity: 0 } : circleStyle),
        ...ORIGIN_50,
      }}
      {...(isDesktop ? handlers : {})}
    >
      <button
        className="cursor-zoom-in"
        {...resolveInteractiveLabels(title)}
        onClick={handleTap}
      >
        <Picture
          mediaRecord={mediaRecord}
          {...pictureProps}
          {...dimensions}
        />
      </button>
    </motion.li>
  );
};
