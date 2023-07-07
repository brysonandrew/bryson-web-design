import { type FC } from 'react';
import styled from '@emotion/styled';
import { useHome } from '@hooks/useHome';
import {
  motion,
  type HTMLMotionProps,
} from 'framer-motion';
import clsx from 'clsx';
import { Inner } from './Inner';
import { GLOW_BOX_SHADOW, PARENT_GLOW_PROPS } from '@constants/colors';

const Root = styled(motion.div)``;
const Button = styled(motion.button)``;

type TProps = HTMLMotionProps<'div'>;
export const Home: FC<TProps> = () => {
  const handleTap = useHome();

  return (
    <Root style={{ x: '-100%' }} {...PARENT_GLOW_PROPS}>
      <Button
        aria-label='home'
        className={clsx(GLOW_BOX_SHADOW)}
        onTap={handleTap}
      >
        <Inner>Home</Inner>
      </Button>
    </Root>
  );
};
