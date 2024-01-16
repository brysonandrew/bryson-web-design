import styled from '@emotion/styled';
import clsx from 'clsx';
import { Sound } from './Sound';
import { DarkMode } from './DarkMode';
import { isMobile } from 'react-device-detect';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { TDivMotionProps } from '@lib/types/dom';
import { BORDER_RADIUS } from '@app/style/border-radius';
import { useApp } from '@lib/context/app/useApp';

const Root = styled(motion.div)``;

type TProps = TDivMotionProps;
export const Settings: FC<TProps> = (props) => {
  const { BORDER_RADIUS, GLOW, Texture } = useApp();

  return (
    <Root
      className={clsx(
        'absolute bottom-6 right-6 row gap-2 z-10 backdrop-blur-sm overflow-hidden py-1 px-2',
      )}
      style={{
        borderRadius: BORDER_RADIUS.XL,
        boxShadow: GLOW.secondary,
      }}
      {...props}
    >
      <Texture classValue='opacity-50' />
      <DarkMode />
      {!isMobile && <Sound />}
    </Root>
  );
};
