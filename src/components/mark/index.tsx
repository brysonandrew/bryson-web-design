import styled from '@emotion/styled';
import clsx, { ClassValue } from 'clsx';
import { motion } from 'framer-motion';
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
        'absolute left-0 top-0 bottom-0 -mr-1 -mb-1 background-color-1 pointer-events-none',
        classValue,
      )}
      style={{
        width: 'calc(0.5rem + 4px)',
        height: '100%',
        x: '0%',
        y: '0%',
        ...style,
      }}
      {...(isDarkMode ? BASE_PROPS : {})}
      {...props}
    >
      {/* <motion.div  className='absolute -left-2 top-0 bottom-0 w-2 h-full bg-red' style={{ filter: 'blur(6px)' }} /> */}
    </Root>
  );
};
