import { useState, type FC } from 'react';
import { motion, useTransform } from 'framer-motion';
import styled from '@emotion/styled';
import { PRESENCE_OPACITY_Y_SHIFT } from '@constants/animation';
import { TBaseProps } from '../types';
import { TImageResolverEntry } from '@t/screens';
import { Gallery as Fetch } from '@components/fetch-media/Gallery';
import { Control } from './Control';
import { useHoverKey } from '@hooks/cursor/useHoverKey';
import { useContext } from '@context/viewport/Context';

export const Root = styled(motion.div)``;

type TProps = TBaseProps;
export const Sections: FC<TProps> = (props) => {
  const { width: viewportWidth = 0 } = useContext();
  const { count, width, items, imageRecord } = props;
  const [container, setContainer] =
    useState<HTMLElement | null>(null);
  const { isHover, handlers } = useHoverKey('none');
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
        {items.map(
          (
            [filePath, value]: TImageResolverEntry,
            index: number,
          ) => (
            <li
              key={filePath}
              className='relative flex justify-center'
              style={{ width: viewportWidth }}
            >
              {imageRecord?.[filePath] &&
              container !== null ? (
                <Control
                  key={value.png.key}
                  index={index}
                  container={container}
                  viewportWidth={viewportWidth}
                  mediaRecord={imageRecord[filePath]}
                  isHover={isHover}
                  {...props}
                />
              ) : (
                <Fetch moduleRecord={value} />
              )}
            </li>
          ),
        )}
      </motion.ul>
    </Root>
  );
};
