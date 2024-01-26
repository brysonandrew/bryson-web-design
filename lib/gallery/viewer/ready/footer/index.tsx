import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import type { FC } from 'react';

import { Core } from './core';
import { TBaseProps } from '@brysonandrew/gallery';
import { useHoverKey } from '@brysonandrew/cursor/hooks/useHoverKey';
import { BIG_CURSOR_KEY } from '@brysonandrew/cursor/config/constants';
import { useApp } from '@brysonandrew/app';
import { DURATION, P } from '@brysonandrew/animation';

const Root = styled(motion.footer)``;

type TProps = TBaseProps;
export const Footer: FC<TProps> = (props) => {
  const { Back } = useApp();
  const { handlers } = useHoverKey(
    BIG_CURSOR_KEY,
    'footer',
  );
  return (
    <Root
      className='relative flex justify-center w-full z-10'
      transition={{
        ease: 'easeIn',
        duration: DURATION,
        delay: 0.2,
      }}
      {...P['up100%/-']}
      {...handlers}
    >
      <Back />
      <Core {...props} />
    </Root>
  );
};
