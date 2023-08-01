import { PRESENCE_OPACITY } from '@constants/animation';
import styled from '@emotion/styled';
import { useContext } from '@state/Context';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { type FC } from 'react';
import { isMobile } from 'react-device-detect';

const Root = styled(motion.div)`
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
`;

export const Background: FC = () => {
  const {
    darkMode: { isDarkMode },
  } = useContext();
  return (
    <Root
      className={clsx('absolute inset-0')}
      style={{
        backgroundColor: `rgba(${
          isDarkMode ? '12,12,12' : '234,234,234'
        }, ${isMobile ? 0.95 : 0.7})`,
      }}
      {...PRESENCE_OPACITY}
    />
  );
};
