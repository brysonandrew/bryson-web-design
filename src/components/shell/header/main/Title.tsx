import { ThinLine } from '@components/thin-line';
import { resolveDropShadow } from '@constants/colors';
import styled from '@emotion/styled';
import { useContext } from '@state/Context';
import { motion } from 'framer-motion';
import type { CSSProperties, FC } from 'react';

const Root = styled(motion.div)``;

type TProps = { style?: CSSProperties };
export const Title: FC<TProps> = () => {
  const {
    darkMode: { isDarkMode },
  } = useContext();
  return (
    <Root className='row-start'>
      <div
        className='relative top-4 w-2 h-2 shrink-0 rounded-full dark:bg-white bg-black glow-interactive md:top-2'
        style={{
          filter: isDarkMode
            ? resolveDropShadow(6, 'baby-blue')
            : resolveDropShadow(0),
        }}
      />
      <div className='p-1.5' />
      <div className='relative flex flex-col pb-2 md:flex-row'>
        <h1 className='relative text-color text-md uppercase'>
          Bryson A.
        </h1>
        <div className='p-0 md:p-0.75' />
        <h2 className='text-color-1 text-md italic uppercase -ml-0.5 mt-0 md:ml-0 md:mt-0.0625'>
          Web developer
          <ThinLine classValue='flex absolute bottom-1 left-0' />
        </h2>
      </div>
    </Root>
  );
};
