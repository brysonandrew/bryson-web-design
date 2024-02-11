import { motion } from 'framer-motion';
import { type FC } from 'react';
import { Picture } from '@brysonandrew/media/picture';
import { useImageDimensions } from '@brysonandrew/media/hooks/useImageDimensions';
import {
  GRAYED_OUT,
  INIT as INIT_FILTER,
} from '@brysonandrew/svg-filter';
import clsx from 'clsx';
import { useHoverKey } from '@brysonandrew/cursor/hooks/useHoverKey';
import { resolveInteractiveLabels } from '@brysonandrew/utils-attributes/resolveInteractiveLabels';
import { TImgMotionProps } from '@brysonandrew/config-types/dom/motion';
import { isDesktop } from 'react-device-detect';
import { CUSTOM_CURSOR_KEY } from '@brysonandrew/cursor/config/constants';
import {
  TPositionConfig,
  useCircle,
} from '@pages/index/build/images/hooks/useCircle';
import { useTapHandler } from '@hooks/useTapHandler';
import { TMediaRecord } from '@brysonandrew/media/config/types';
import { GALLERY_ICON } from '@brysonandrew/icons-keys/gallery';
import { useCurrName } from '@brysonandrew/gallery-viewer/hooks/params/useCurrName';
import { ORIGIN_50 } from '@pages/index/build/config/constants';

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
        ...circleStyle,
        ...ORIGIN_50,
      }}
      {...(isDesktop ? handlers : {})}
    >
      <motion.button
        className='cursor-zoom-in'
        {...resolveInteractiveLabels(title)}
        onTap={handleTap}
      >
        <Picture
          mediaRecord={mediaRecord}
          {...pictureProps}
          {...dimensions}
        />
      </motion.button>
    </motion.li>
  );
};
