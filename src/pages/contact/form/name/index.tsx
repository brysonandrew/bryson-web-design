import styled from '@emotion/styled';
import type { HTMLMotionProps } from 'framer-motion';
import { AnimatePresence, motion } from 'framer-motion';
import type { FC } from 'react';
import { Text } from './Text';
import { resolveCompositeKey } from '@utils/keys';
import { PRESENCE_OPACITY_DELAY } from '@constants/animation';

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
      className='relative flex shrink-0 w-37 pl-6 pt-1'
      {...PRESENCE_OPACITY_DELAY}
    >
      <AnimatePresence>
        <motion.div
          key={resolveCompositeKey('Name', title)}
          className='inline-flex'
          animate={
            isFocused ? 'focus' : isValue ? 'value' : 'idle'
          }
        >
          <Text>{title}</Text>
        </motion.div>
      </AnimatePresence>
    </Root>
  );
};
