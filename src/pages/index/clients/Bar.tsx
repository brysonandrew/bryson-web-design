import styled from '@emotion/styled';
import clsx, { ClassValue } from 'clsx';
import { motion } from 'framer-motion';
import type { FC } from 'react';

const Root = styled(motion.div)``;

type TProps = {
  classValue?: ClassValue;
};
export const Bar: FC<TProps> = ({ classValue }) => {
  return (
    <Root
      className={clsx(
        'absolute w-4 h-full rounded-sm bg-green shadow-green',
        classValue,
      )}
      style={{
        height: 'calc(100% + 0.5rem)',
        top: '-0.25rem',
        bottom: '-0.25rem',
      }}
    />
  );
};
//
