import styled from '@emotion/styled';
import clsx, { ClassValue } from 'clsx';
import { HTMLMotionProps, motion } from 'framer-motion';
import { BASE_PROPS } from './config';
import { FC } from 'react';
import { useContext } from '@state/Context';
import { TMotionDivProps } from '@t/dom';

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
    darkMode: { isDarkMode },
  } = useContext();
  return (
    <Root
      key={isDarkMode ? 'dark' : 'light'}
      className={clsx(
        'absolute -left-px -top-px -bottom-px background-color-1 pointer-events-none',
        classValue,
      )}
      style={{
        width: 'calc(0.5rem + 4px)',
        height: 'calc(100% + 2px)',
        originX: "0%",
        originY: "0%",
        ...style,
      }}
      {...(isDarkMode ? BASE_PROPS : {})}
      {...props}
    />
  );
};
