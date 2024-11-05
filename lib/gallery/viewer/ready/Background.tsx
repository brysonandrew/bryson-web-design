import { PRESENCE_OPACITY } from '@brysonandrew/motion-config-constants';
import styled from '@emotion/styled';
import { cx } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { type FC } from 'react';

const Root = styled(motion.div)`
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

export const Background: FC = () => {
  return (
    <Root
      className={cx(
        'absolute inset-0 dark:bg-black-04 bg-white-04',
      )}
      {...PRESENCE_OPACITY}
    />
  );
};
