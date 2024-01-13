import styled from '@emotion/styled';
import clsx, { ClassValue } from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { useDarkMode } from '@lib/hooks/dark-mode/context';
import { TDivMotionProps } from '@lib/types/dom';
import {
  resolveColor,
  resolveGlowColor,
  resolveHoverColor,
} from './config';
import {
  DURATION_DARK_MODE,
  MOTION_CONFIG,
} from '@lib/constants/animation';
const BORDER_SIZE = 2;
const WIDTH = `calc(0.5rem + ${BORDER_SIZE * 2}px)`;

const Root = styled(motion.div)``;

type TProps = TDivMotionProps & {
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
      initial={false}
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
