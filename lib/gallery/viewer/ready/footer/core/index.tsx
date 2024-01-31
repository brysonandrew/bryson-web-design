import { DragIcon } from './DragIcon';
import { useDrag } from '@brysonandrew/gallery-viewer/hooks/useDrag';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { Items } from './items';
import clsx from 'clsx';
import { isDesktop } from 'react-device-detect';
import { useKeys } from '@brysonandrew/gallery-viewer/hooks/useKeys';
import { useApp } from '@brysonandrew/app';
import { TBaseProps } from '@brysonandrew/gallery';
import { PADDING_X } from '@brysonandrew/gallery-viewer/ready/footer/core/config';

type TProps = TBaseProps;
export const Core: FC<TProps> = (props) => {
  const { LIGHT, Back, BORDER_RADIUS } = useApp();
  const { count, motionX, width, mediaRecords } = props;
  useKeys({ readyCount: count });
  const itemWidth = width / count;
  const dragHandlers = useDrag({
    width,
    mediaRecords,
    motionX,
  });

  const left = -width + itemWidth;

  const Background = LIGHT?.Back ?? Back;

  return (
    <div className='relative' style={{ width: itemWidth }}>
      <motion.div
        className='relative row'
        style={{
          x: motionX,
          left: -PADDING_X,
          width: width + PADDING_X * 2,
          padding: `0.25rem ${PADDING_X}px`,
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
        <>
          <Background />
          <Items 
            mediaRecords={mediaRecords}
            itemWidth={itemWidth}
          />
          {isDesktop && (
            <>
              <DragIcon
                classValue='left-0'
                style={{ width: PADDING_X }}
              />
              <DragIcon
                classValue='right-0'
                style={{ width: PADDING_X }}
              />
            </>
          )}
        </>
      </motion.div>
    </div>
  );
};
