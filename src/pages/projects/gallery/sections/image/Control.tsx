import styled from '@emotion/styled';
import type { TMediaRecord } from '@pages/projects/config';
import { motion } from 'framer-motion';
import { type FC, useRef } from 'react';
import { Zoom } from './zoom';
import { TBaseProps } from '../../types';
import { TChildren } from '@t/index';
import { useContext } from '@state/Context';
import { isDesktop } from 'react-device-detect';
import { useHover } from '@hooks/useHover';
import { useImageDimensions } from '@hooks/media/useImageDimensions';
import { resolveDimensions } from '@hooks/media/resolveDimensions';

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
  const ref = useRef<HTMLDivElement | null>(null);
  const container = ref.current;

  const dimensions = useImageDimensions({
    container: resolveDimensions(container),
    image: resolveDimensions(image),
  });

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
      {isHover && image && container && isDesktop && (
        <Zoom
          key={mediaRecord.png.key}
          container={container}
          image={image}
          mediaRecord={mediaRecord}
          {...{ scrollX, scrollY }}
        />
      )}
    </motion.div>
  );
};
