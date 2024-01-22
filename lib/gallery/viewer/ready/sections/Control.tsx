import styled from '@emotion/styled';
import { MotionValue, motion } from 'framer-motion';
import { type FC } from 'react';
import { Zoom } from './zoom';
import { TBaseProps } from '../types';
import { useScroll } from '@brysonandrew/scroll';
import { isDesktop } from 'react-device-detect';
import { Image } from './Image';
import { TMediaRecord } from '@brysonandrew/media/picture/config/types';
import { useCurrName } from '../../hooks/params/useCurrName';

export const Root = styled(motion.div)``;

type TProps = Pick<TBaseProps, 'width'> & {
  index: number;
  count: number;
  mediaRecord: TMediaRecord;
  container: HTMLElement;
  motionX: MotionValue;
  isHover: boolean;
  viewportWidth: number;
};
export const Control: FC<TProps> = ({
  index,
  count,
  mediaRecord,
  container,
  width,
  motionX,
  isHover,
  viewportWidth,
}) => {
  const name = useCurrName();

  const isMarker = index + 1 === Number(name);

  const { scroll } = useScroll();
  const containerDimensions = {
    height: container.clientHeight,
    width,
  };

  return (
    <motion.div className='relative' style={{ width }}>
      <Image
        mediaRecord={mediaRecord}
        container={containerDimensions}
        motionX={motionX}
      >
        {(image) => (
          <>
            {isHover && image && isDesktop && isMarker && (
              <Zoom
                key={mediaRecord.src}
                index={index}
                count={count}
                container={container}
                viewportWidth={viewportWidth}
                image={image}
                mediaRecord={mediaRecord}
                scroll={scroll}
              />
            )}
          </>
        )}
      </Image>
    </motion.div>
  );
};
