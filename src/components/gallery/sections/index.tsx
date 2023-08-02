import { useState, type FC } from 'react';
import { motion, useTransform } from 'framer-motion';
import styled from '@emotion/styled';
import { PRESENCE_OPACITY_Y_SHIFT } from '@constants/animation';
import { Filter } from './Filter';
import { TBaseProps } from '../types';
import { TImageResolverEntry } from '@t/screens';
import { Gallery as Fetch } from '@components/fetch-media/Gallery';
import { Control } from './Control';

export const Root = styled(motion.div)``;

type TProps = TBaseProps;
export const Sections: FC<TProps> = (props) => {
  const { count, motionX, width, items, imageRecord } =
    props;
  const [container, setContainer] =
    useState<HTMLElement | null>(null);
  const left = useTransform(
    motionX,
    (v) =>
      v * count * (width.screen / width.footer) +
      width.screen * 0.5 * (count - 1),
  );
  return (
    <Root className='h-full grow'>
      <Filter motionX={motionX} />
      <motion.ul
        className='flex relative h-full'
        style={{ left, width: width.screen * count }}
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
              style={{ width: width.screen }}
            >
              {imageRecord?.[filePath] &&
              container !== null ? (
                <Control
                  key={value.png.key}
                  index={index}
                  container={container}
                  mediaRecord={imageRecord[filePath]}
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
