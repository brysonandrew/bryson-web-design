import type { FC } from 'react';
import { motion, useTransform } from 'framer-motion';
import styled from '@emotion/styled';
import { PRESENCE_OPACITY } from '@constants/animation';
import { Image } from './image';
import type { TMedia } from '@pages/showcase/config';
import { Filter } from './Filter';
import { TBaseProps } from '../types';
import { ImagePlaceholder } from '@components/icons/ImagePlaceholder';
import { IMAGE_PLACEHOLDER_ID } from './constants';

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
      <ImagePlaceholder id={IMAGE_PLACEHOLDER_ID} />
      <Filter motionX={motionX} />
      <motion.ul
        className='flex relative h-full'
        style={{ left, width: width.screen * count }}
        {...PRESENCE_OPACITY}
      >
        {items.map((item: TMedia) => (
          <motion.li
            key={item.key}
            className='relative flex justify-center'
            style={{ width: width.screen }}
          >
            <Image item={item} {...props} />
          </motion.li>
        ))}
      </motion.ul>
    </Root>
  );
};
