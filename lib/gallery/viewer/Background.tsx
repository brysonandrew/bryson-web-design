import { PRESENCE_OPACITY } from '@brysonandrew/lib/animation/constants';
import styled from '@emotion/styled';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { type FC } from 'react';
import { isMobile } from 'react-device-detect';
import { useDarkMode } from '@brysonandrew/lib/context';

const Root = styled(motion.div)`
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

export const Background: FC = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <Root
      className={clsx('absolute inset-0')}
      style={{
        backgroundColor: `rgba(${
          isDarkMode ? '12, 12,12' : '234,234,234'
        }, ${isMobile ? 0.95 : isDarkMode ? 0.6 : 0.4})`,
      }}
      {...PRESENCE_OPACITY}
    />
  );
};
