import styled from '@emotion/styled';
import clsx, { ClassValue } from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { useDarkMode } from '@lib/hooks/dark-mode/context';
import { TDivMotionProps } from '@lib/types/dom';
import { useApp } from '@lib/context/app/useApp';

const Root = styled(motion.div)``;

type TProps = TDivMotionProps & {
  classValue?: ClassValue;
};
export const Mark: FC<TProps> = ({
  classValue,
  style,
  ...props
}) => {
  const { BORDER_RADIUS, COLOR } = useApp();
  const { darkKey } = useDarkMode();
  return (
    <Root
      key={darkKey}
      className={clsx(
        'absolute left-0 top-0 bottom-0 -mr-1 -mb-1 pointer-events-none',
        classValue,
      )}
      style={{
        width: `calc(0.5rem + 4px)`,
        height: '100%',
        borderRadius: BORDER_RADIUS.SM,
        ...(style ?? {}),
      }}
      initial={false}
      variants={{
        animate: {
          backgroundColor: COLOR['secondary'],
        },
        hover: {
          backgroundColor: COLOR['accent'],
        },
      }}
      {...props}
    />
  );
};
