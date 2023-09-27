import styled from '@emotion/styled';
import clsx, { ClassValue } from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { useDarkMode } from '@context/dark-mode';
import { TMotionDivProps } from '@t/dom';
import {
  resolveColor,
  resolveGlowColor,
  resolveHoverColor,
} from './config';
const BORDER_SIZE = 2;
const WIDTH = `calc(0.5rem + ${BORDER_SIZE * 2}px)`;

const Root = styled(motion.div)``;

type TProps = TMotionDivProps & {
  classValue?: ClassValue;
};
export const Mark: FC<TProps> = ({
  classValue,
  style,
  ...props
}) => {
  const { isDarkMode, darkKey } = useDarkMode();
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
    />
  );
};
