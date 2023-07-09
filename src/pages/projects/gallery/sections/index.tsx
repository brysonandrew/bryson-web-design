import type { FC } from 'react';
import { motion, useTransform } from 'framer-motion';
import styled from '@emotion/styled';
import { PRESENCE_OPACITY_Y_SHIFT } from '@constants/animation';
import { Image } from './image';
import { Filter } from './Filter';
import { TBaseProps } from '../types';
import { TImageRecordEntry } from '@t/screens';

export const Root = styled(motion.div)``;

type TProps = TBaseProps;
export const Sections: FC<TProps> = (props) => {
  const { count, motionX, width, items } = props;

  const left = useTransform(
    motionX,
    (v) =>
      v * count * (width.screen / width.footer) + width.screen * 0.5 * (count - 1),
  );

  return (
    <Root className='h-full grow'>
      <Filter motionX={motionX} />
      <motion.ul
        className='flex relative h-full'
        style={{ left, width: width.screen * count }}
        {...PRESENCE_OPACITY_Y_SHIFT}
      >
        {items.map(
          ([key, value]: TImageRecordEntry, index) => (
            <motion.li
              key={key}
              className='relative flex justify-center'
              style={{ width: width.screen }}
            >
              <Image index={index} value={value} {...props} />
            </motion.li>
          ),
        )}
      </motion.ul>
    </Root>
  );
};
