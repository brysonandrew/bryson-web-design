import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { useContext } from '@state/Context';
import { Dark } from '@components/icons/Dark';
import { Light } from '@components/icons/Light';
import { PARENT_GLOW_PROPS } from '@constants/colors';
import { Glow } from '@components/glow';
import { Metal } from '@components/metal';
import clsx from 'clsx';
import { Space } from '@components/spaces/Space';
import { Space_5 } from '@components/spaces/Space_5';
import { Space_25 } from '@components/spaces/Space_25';
const SHARED_CLASS = 'rounded-full';

const Root = styled(motion.button)``;

export const DarkMode: FC = () => {
  const { darkMode } = useContext();

  const Icon = darkMode.isDarkMode ? Light : Dark;

  return (
    <Root
      className={clsx(
        'relative row text-color-1 p-1 glow-interactive',
        SHARED_CLASS,
      )}
      onClick={darkMode.toggle}
      {...PARENT_GLOW_PROPS}
    >
      <Glow classValue={SHARED_CLASS} drop={1}>
        <Metal classValue={SHARED_CLASS} />
      </Glow>
      <Space_5 />

      <h6 className='relative text-sm'>
        {darkMode.isDarkMode ? 'LIGHT' : 'DARK'}
      </h6>
      <Space_25 />
      <Icon classValue='relative' />

    </Root>
  );
};
