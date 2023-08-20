import styled from '@emotion/styled';
import clsx, { ClassValue } from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { useContext } from '@state/Context';
import { TMotionDivProps } from '@t/dom';
import {
  GLOW_BABY_BLUE,
  GLOW_MARK_DARK,
  GLOW_MARK_LIGHT,
} from '@uno/shadows';
import { COLORS } from '@uno/colors';
const BORDER_SIZE = 2;
const WIDTH = `calc(0.5rem + ${BORDER_SIZE * 2}px)`;
const X = `calc(0.5rem + ${0}px)`;

const Root = styled(motion.div)``;

type TProps = TMotionDivProps & {
  classValue?: ClassValue;
};
export const Mark: FC<TProps> = ({
  classValue,
  style,
  ...props
}) => {
  const {
    darkMode: { isDarkMode, darkKey },
  } = useContext();
  return (
    <Root
      key={darkKey}
      className={clsx(
        'absolute left-0 top-0 bottom-0 -mr-1 -mb-1 pointer-events-none',
        classValue,
      )}
      style={{
        width: WIDTH,
        height: '100%',
        ...(style ?? {}),
      }}
      variants={{
        animate: {
          backgroundColor: isDarkMode
            ? COLORS['teal']
            : COLORS['gray-1'],
          boxShadow: isDarkMode
            ? GLOW_MARK_DARK
            : GLOW_MARK_LIGHT,
        },
        hover: {
          // boxShadow: GLOW_BABY_BLUE,
          backgroundColor: isDarkMode
            ? COLORS['baby-blue']
            : COLORS['black'],
        },
      }}
      {...props}
    >
      {!isDarkMode && (
        <motion.div
          style={{
            height: '100%',
            width: BORDER_SIZE,
            y: 'calc(-50% - 1px)',
            x: 0,
          }}
          className='absolute left-0 top-1/2 bg-baby-blue'
        />
      )}
    </Root>
  );
};
