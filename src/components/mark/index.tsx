import styled from '@emotion/styled';
import clsx, { ClassValue } from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { useContext as useDarkModeContext } from '@context/dark-mode/Context';
import { TMotionDivProps } from '@t/dom';
import {
  GLOW_MARK_DARK,
  GLOW_MARK_LIGHT,
} from '@uno/shadows';
import { COLORS } from '@uno/colors';
import {
  resolveColor,
  resolveGlowColor,
  resolveHoverColor,
} from './config';
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
  } = useDarkModeContext();
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
          ...resolveColor(isDarkMode),
          ...resolveGlowColor(isDarkMode),
        },
        hover: {
          ...resolveHoverColor(isDarkMode),
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
