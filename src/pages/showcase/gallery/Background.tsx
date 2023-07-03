import { PRESENCE_OPACITY } from '@constants/animation';
import styled from '@emotion/styled';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { type FC } from 'react';

const Root = styled(motion.div)``;

export const Background: FC = () => {
  return (
    <Root
      className={clsx('absolute inset-0 w-full')}
      style={{
        backdropFilter: 'blur(12px)',
        backgroundColor: 'rgba(12,12,12, 0.8)',
      }}
      {...PRESENCE_OPACITY}
    />
  );
};
