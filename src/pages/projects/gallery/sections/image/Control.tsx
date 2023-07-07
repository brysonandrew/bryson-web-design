import styled from '@emotion/styled';
import type { TMediaRecord } from '@pages/projects/config';
import { motion } from 'framer-motion';
import { type FC, useRef, useMemo } from 'react';
import { Zoom } from './zoom';
import { TBaseProps } from '../../types';
import { TChildren } from '@t/index';
import { useWindowSize } from '@hooks/useWindowSize';
import { useContext } from '@state/Context';
import { isDesktop } from 'react-device-detect';
import { useHover } from '@hooks/useHover';

export const Root = styled(motion.div)``;

type TProps = Pick<TBaseProps, 'width'> & {
  mediaRecord: TMediaRecord;
  image: HTMLImageElement | null;
  children(
    dimensions: Pick<HTMLImageElement, 'width' | 'height'>,
  ): TChildren;
};
export const Control: FC<TProps> = ({
  mediaRecord,
  image,
  width,
  children,
}) => {
  const { isHover, ...hoverHandlers } = useHover();
  const { scrollX, scrollY } = useContext();
  const windowSize = useWindowSize();
  const isResizing = windowSize?.isResizing;
  const ref = useRef<HTMLDivElement | null>(null);
  const element = ref.current;

  const dimensions = useMemo(() => {
    let imageHeight = 0;
    let imageWidth = 0;

    if (element && image && !isResizing) {
      const rect = element.getBoundingClientRect();

      const rectAspect = rect.width / rect.height;
      const imageAspect =
        image.naturalWidth / image.naturalHeight;

      if (imageAspect > rectAspect) {
        imageWidth = rect.width;
        imageHeight = rect.width / imageAspect;
      } else {
        imageWidth = rect.width * imageAspect;
        imageHeight = rect.height;
      }
    }
    return { width: imageWidth, height: imageHeight };
  }, [element, image, isResizing, isHover]);

  return (
    <motion.div
      ref={ref}
      className='relative'
      style={{ width: width.footer }}
      {...(isDesktop
        ? {
            ...hoverHandlers,
            onPointerDown: (e) => e.preventDefault(),
          }
        : {})}
    >
      {children(dimensions)}
      {isHover && image && element && isDesktop && (
        <Zoom
          key={mediaRecord.png.key}
          element={element}
          image={image}
          mediaRecord={mediaRecord}
          {...{ scrollX, scrollY }}
        />
      )}
    </motion.div>
  );
};
