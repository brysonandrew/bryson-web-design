import { DragIcon } from './DragIcon';
import { useDrag } from '@brysonandrew/viewer/hooks/useDrag';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { Items } from './items';
import clsx from 'clsx';
import { isDesktop } from 'react-device-detect';
import { useKeys } from '@brysonandrew/viewer/hooks/useKeys';
import { useApp } from '@brysonandrew/app';
import { TBaseProps } from '@brysonandrew/gallery';
import { PADDING_X } from '@brysonandrew/viewer/ready/footer/core/config';

const Root = styled.div``;
const Dragger = styled(motion.div)``;

type TProps = TBaseProps;
export const Core: FC<TProps> = (props) => {
  const { Back, GLOW_BOX, BORDER_RADIUS } =
    useApp();
  const { count, motionX, width, mediaRecords } = props;
  useKeys({ readyCount: count });
  const itemWidth = width / count;
  const dragHandlers = useDrag({
    width,
    mediaRecords,
    motionX,
  });

  const left = -width + itemWidth;

  return (
    <Root className='relative' style={{ width: itemWidth }}>
      <Back />
      <Dragger
        className={clsx(
          'left-0 bottom-0 overflow-hidden',
          [
            isDesktop
              ? 'relative h-auto row'
              : 'absolute h-screen row-end',
          ],
        )}
        style={{
          x: motionX,
          left: -PADDING_X,
          width: width + PADDING_X * 2,
          padding: `0.25rem ${PADDING_X}px`,
          boxShadow: GLOW_BOX.accent,
          borderRadius: BORDER_RADIUS.MD,
        }}
        dragConstraints={{
          left,
          right: 0,
          top: 0,
          bottom: 0,
        }}
        {...dragHandlers}
      >
        {isDesktop && (
          <>
            <Back classValue='opacity-50' />
            <DragIcon classValue='left-0' />
            <DragIcon classValue='right-0' />
          </>
        )}
        <Items
          mediaRecords={mediaRecords}
          itemWidth={itemWidth}
        />
      </Dragger>
    </Root>
  );
};
