import styled from '@emotion/styled';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { SELECT_LAYOUT_ID } from './config';
import { TChildren, TClassValueProps } from '@t/index';
import { TMotionDivProps } from '@t/react';
import { useContext } from '@state/Context';

const resolveSize = (size: number) => {
  const offset = -size * 0.5;
  return {
    left: offset,
    top: offset,
    width: size,
    height: size,
  };
};

const Root = styled(motion.div)``;

type TProps = TMotionDivProps &
  TClassValueProps & {
    size?: number;
    children?: TChildren;
  };
export const Sight: FC<TProps> = ({
  classValue,
  style,
  size = 40,
  children,
  ...props
}) => {
  const {
    cursorX,
    cursorY,
    darkMode: { isDarkMode },
  } = useContext();
  return (
    <Root
      layoutId={SELECT_LAYOUT_ID}
      style={{
        mixBlendMode: isDarkMode
          ? 'exclusion'
          : 'difference',
        x: cursorX,
        y: cursorY,
        originX: '50%',
        originY: '50%',
        ...resolveSize(size),
        ...style,
      }}
      className={clsx(
        'fixed center background-color-1 text-color-4 pointer-events-none rounded-full cursor-default z-50',
        classValue,
      )}
      {...props}
    >
      {children}
    </Root>
  );
};
