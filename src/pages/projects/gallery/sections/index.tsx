import { useState, type FC } from 'react';
import { motion, useTransform } from 'framer-motion';
import styled from '@emotion/styled';
import { PRESENCE_OPACITY_Y_SHIFT } from '@lib/constants/animation';
import { TBaseProps } from '../types';
import { Control } from './Control';
import { useHoverKey } from '@lib/components/cursor/hooks/useHoverKey';
import { useViewport } from '@lib/context/viewport';
import { TMediaRecord } from '@ops/screens/process/config/types';
import { NONE_CURSOR_KEY } from '@lib/components/cursor/switch/config';

export const Root = styled(motion.div)``;

type TProps = TBaseProps;
export const Sections: FC<TProps> = (props) => {
  const { width: viewportWidth = 0 } = useViewport();
  const { count, width, mediaRecords } = props;
  const [container, setContainer] =
    useState<HTMLElement | null>(null);
  const { isHover, handlers } =
    useHoverKey(NONE_CURSOR_KEY);
  const left = useTransform(
    props.motionX,
    (v) =>
      v * count * (viewportWidth / width) +
      viewportWidth * 0.5 * (count - 1),
  );
  return (
    <Root className='h-full grow' {...handlers}>
      <motion.ul
        className='flex relative h-full'
        style={{ left, width: viewportWidth * count }}
        ref={(instance) => {
          if (instance && !container) {
            setContainer(instance);
          }
        }}
        {...PRESENCE_OPACITY_Y_SHIFT}
      >
        {mediaRecords.map(
          (mediaRecord: TMediaRecord, index: number) => (
            <li
              key={mediaRecord.src}
              className='relative flex justify-center'
              style={{ width: viewportWidth }}
            >
              {container && (
                <Control
                  key={mediaRecord.src}
                  index={index}
                  container={container}
                  viewportWidth={viewportWidth}
                  mediaRecord={mediaRecord}
                  isHover={isHover}
                  {...props}
                />
              )}
            </li>
          ),
        )}
      </motion.ul>
    </Root>
  );
};
