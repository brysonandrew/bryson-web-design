import { GlitchPorsalin } from '@components/text/glitch-porsalin';
import styled from '@emotion/styled';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Name } from './Name';

const Root = styled(motion.div)``;

type TProps = HTMLMotionProps<'input'> & {
  title: string;
  isFocused: boolean;
};
export const TextName: FC<TProps> = ({
  title,
  isFocused,
  ...props
}) => {
  const isValue = Boolean(props.value);

  return (
    <Root
      className='relative flex shrink-0 w-28 pl-4'
      initial={false}
      animate={
        isFocused ? 'focus' : isValue ? 'value' : 'idle'
      }
    >
      <div className='inline-flex'>
        <Name>{title}</Name> 
      </div>
    </Root>
  );
};
