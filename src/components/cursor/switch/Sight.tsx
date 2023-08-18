import styled from '@emotion/styled';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { TChildren, TClassValueProps } from '@t/index';
import { TMotionDivProps } from '@t/dom';
import { useContext } from '@state/Context';

const resolveSize = (size: number) => {
  return {
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
  size = 8,
  children,
  ...props
}) => {
  const { cursorX, cursorY, cursorLabelX, cursorLabelY } =
    useContext();

  return (
    <Root
      style={{
        x: cursorLabelX,
        y: cursorLabelY,
        left: cursorX,
        top: cursorY,
        originX: '50%',
        originY: '50%',
        opacity: 1,
        ...resolveSize(size),
        ...style,
      }}
      className={clsx(
        'fixed center background-color-3 text-color-4 glow-interactive pointer-events-none rounded-full cursor-default z-50',
        classValue,
      )}
      {...props}
    >
      {children}
    </Root>
  );
};
