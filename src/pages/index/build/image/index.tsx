import { motion } from 'framer-motion';
import { type FC } from 'react';
import { Picture } from '@brysonandrew/media/picture';
import { useImageDimensions } from '@brysonandrew/measure/hooks/useImageDimensions';
import clsx from 'clsx';
import { useHoverKey } from '@brysonandrew/motion-cursor/hooks/useHoverKey';
import { resolveAccessibilityTitles } from '@brysonandrew/utils-attributes/resolveAccessibilityTitles';
import { TImgMotionProps } from '@brysonandrew/config-types/dom/motion';
import { isDesktop } from 'react-device-detect';
import { CUSTOM_CURSOR_KEY } from '@brysonandrew/motion-cursor/config/constants';
import { useTapHandler } from '@hooks/useTapHandler';
import { TMediaRecord } from '@brysonandrew/media/config/types';
import { GALLERY_ICON } from '@brysonandrew/icons-keys/gallery';
import { useCurrName } from '@brysonandrew/gallery-viewer/hooks/params/useCurrName';
import { ORIGIN_50 } from '@pages/index/build/constants';
import { GRAYED_OUT, INIT } from '@brysonandrew/css-format';
import { usImageStatus } from '@pages/index/build/image/status';
import {
  TPositionConfig,
  useCircle,
} from '@pages/index/build/image/circle';
import { useHomeBuild } from '@pages/index/build/context';

type TProps = TImgMotionProps & {
  isScrolling: boolean;
  index: number;
  count: number;
  mediaRecord: TMediaRecord;
  positionConfig: TPositionConfig;
};
export const BuildImage: FC<TProps> = (props) => {
  const {
    isScrolling,
    index,
    count,
    mediaRecord,
    positionConfig,
    ...pictureProps
  } = props;
  const [status, statusHandlers] = usImageStatus(mediaRecord);
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

  if (status === 'error') return null;

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
      animate={{
        opacity:
          status === 'init'
            ? 0
            : status === 'loading'
            ? 0.5
            : status === 'ready'
            ? 1
            : 0.2,
      }}
      {...(isDesktop ? handlers : {})}
    >
      <button
        className="cursor-zoom-in"
        {...resolveAccessibilityTitles(title)}
        onClick={handleTap}
      >
        <Picture
          mediaRecord={mediaRecord}
          {...pictureProps}
          {...dimensions}
          {...statusHandlers}
        />
      </button>
    </motion.li>
  );
};
