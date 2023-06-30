import styled from '@emotion/styled';
import clsx, { ClassValue } from 'clsx';
import { HTMLMotionProps, motion } from 'framer-motion';
import type { FC } from 'react';

const Root = styled(motion.div)``;

type TProps = HTMLMotionProps<'div'> & {
  classValue?: ClassValue;
};
export const Bar: FC<TProps> = ({
  classValue,
  ...props
}) => {
  return (
    <Root
      className={clsx(
        'absolute w-4 h-full rounded-sm bg-baby-blue shadow-baby-blue-sm',
        classValue,
      )}
      style={{
        height: 'calc(100% + 0.5rem)',
        top: '-0.25rem',
        bottom: '-0.25rem',
      }}
      {...props}
    />
  );
};
