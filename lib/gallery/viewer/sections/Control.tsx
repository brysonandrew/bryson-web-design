import styled from '@emotion/styled';
import { MotionValue, motion } from 'framer-motion';
import { PointerEventHandler, type FC } from 'react';
import { Zoom } from './zoom';
import { TBaseProps } from '../types';
import { useScroll } from '@brysonandrew/lib/context/scroll/useScroll';
import { isDesktop } from 'react-device-detect';
import { Image } from './Image';
import { TMediaRecord } from '@brysonandrew/lib/media/picture/config/types';
import { useCurrName } from '../hooks/params/useCurrName';

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

  const isActive = index + 1 === Number(name);

  const { scroll } = useScroll();
  const containerDimensions = {
    height: container.clientHeight,
    width,
  };

  const handlePointerDown: PointerEventHandler<
    HTMLDivElement
  > = (e) => e.preventDefault();

  return (
    <motion.div
      className='relative'
      style={{ width }}
      {...(isDesktop
        ? {
            onPointerDown: handlePointerDown,
          }
        : {})}
    >
      <Image
        mediaRecord={mediaRecord}
        container={containerDimensions}
        motionX={motionX}
      >
        {(image) => (
          <>
            {isHover && image && isDesktop && isActive && (
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
