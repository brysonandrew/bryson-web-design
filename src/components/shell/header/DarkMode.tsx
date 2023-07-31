import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { useContext } from '@state/Context';
import { Dark } from '@components/icons/Dark';
import { Light } from '@components/icons/Light';
import { Space } from '@components/spaces/Space';

const Root = styled(motion.button)``;

export const DarkMode: FC = () => {
  const { darkMode } = useContext();

  return (
    <Root
      className='row text-color'
      onClick={darkMode.toggle}
    >
      {darkMode.isDarkMode ? 'DARK' : 'LIGHT'}
      <Space />
      {darkMode.isDarkMode ? <Dark /> : <Light />}
    </Root>
  );
};
