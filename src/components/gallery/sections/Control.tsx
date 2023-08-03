import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { type FC } from 'react';
import { Zoom } from './zoom';
import { TBaseProps } from '../types';
import { useContext } from '@state/Context';
import { isDesktop } from 'react-device-detect';
import { TMediaRecord } from '@t/media';
import { Image } from './Image';
import { useHoverKey } from '@hooks/useHoverKey';

export const Root = styled(motion.div)``;

type TProps = Pick<TBaseProps, 'width'> & {
  index: number;
  count: number;
  mediaRecord: TMediaRecord;
  container: HTMLElement;
};
export const Control: FC<TProps> = ({
  index,
  count,
  mediaRecord,
  container,
  width,
}) => {
  const { isHover, ...hoverHandlers } = useHoverKey('none');
  const { scrollX, scrollY } = useContext();

  const containerDimensions = {
    height: container.clientHeight,
    width: width.footer,
  };

  return (
    <motion.div
      className='relative'
      style={{ width: width.footer }}
      {...(isDesktop
        ? {
            ...hoverHandlers,
            onPointerDown: (e) => e.preventDefault(),
          }
        : {})}
    >
      <Image
        mediaRecord={mediaRecord}
        container={containerDimensions}
      >
        {(image) => (
          <>
            {isHover && image && isDesktop && (
              <Zoom
                key={mediaRecord.png.key}
                index={index}
                count={count}
                container={container}
                viewportWidth={width.screen}
                image={image}
                mediaRecord={mediaRecord}
                {...{ scrollX, scrollY }}
              />
            )}
          </>
        )}
      </Image>
    </motion.div>
  );
};
