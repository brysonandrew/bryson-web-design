import type { FC } from 'react';
import { motion, useTransform } from 'framer-motion';
import styled from '@emotion/styled';
import { PRESENCE_OPACITY_Y_SHIFT } from '@constants/animation';
import { Image } from './image';
import { Filter } from './Filter';
import { TBaseProps } from '../types';
import { TMediaRecord } from '@t/media';

export const Root = styled(motion.div)``;

type TProps = TBaseProps;
export const Sections: FC<TProps> = (props) => {
  const { items, count, motionX, width } = props;

  const left = useTransform(
    motionX,
    (v) => v * count * (width.screen / width.footer),
  );

  return (
    <Root className='h-full grow'>
      <Filter motionX={motionX} />
      <motion.ul
        className='flex relative h-full'
        style={{ left, width: width.screen * count }}
        {...PRESENCE_OPACITY_Y_SHIFT}
      >
        {items.map((mediaRecord: TMediaRecord) => (
          <motion.li
            key={mediaRecord.png.key}
            className='relative flex justify-center'
            style={{ width: width.screen }}
          >
            <Image mediaRecord={mediaRecord} {...props} />
          </motion.li>
        ))}
      </motion.ul>
    </Root>
  );
};
