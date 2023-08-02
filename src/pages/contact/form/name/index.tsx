import styled from '@emotion/styled';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Text } from './Text';
import { resolveCompositeKey } from '@utils/keys';
import {
  PRESENCE_OPACITY_DELAY,
  SLOW_MOTION_CONFIG,
} from '@constants/animation';

const Root = styled(motion.div)``;

type TProps = HTMLMotionProps<'input'> & {
  title: string;
  isFocused: boolean;
};
export const Name: FC<TProps> = ({
  title,
  isFocused,
  ...props
}) => {
  const isValue = Boolean(props.value);

  return (
    <Root
      className='relative flex shrink-0 w-full pt-1 pb-4 pl-0 justify-center md:w-37 md:pb-2 md:pl-6 md:justify-start'
      {...PRESENCE_OPACITY_DELAY}
      {...SLOW_MOTION_CONFIG}
    >
      <motion.div
        key={resolveCompositeKey('Name', title)}
        className='inline-flex'
        animate={
          isFocused ? 'focus' : isValue ? 'value' : 'idle'
        }
      >
        <Text>{title}</Text>
      </motion.div> 
    </Root>
  );
};
