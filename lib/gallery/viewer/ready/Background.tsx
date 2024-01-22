import { PRESENCE_OPACITY } from '@brysonandrew/animation';
import styled from '@emotion/styled';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { type FC } from 'react';

const Root = styled(motion.div)`
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

export const Background: FC = () => {
  return (
    <Root
      className={clsx('absolute inset-0 dark:bg-black-04 bg-white-04')}
      {...PRESENCE_OPACITY}
    />
  );
};
