import { type FC } from 'react';
import styled from '@emotion/styled';
import { useHome } from '@hooks/useHome';
import {
  motion,
  type HTMLMotionProps,
} from 'framer-motion';
import { Inner } from './Inner';
import { PARENT_GLOW_PROPS } from '@utils/effects/glow';

const Root = styled(motion.div)``;
const Button = styled(motion.button)``;

type TProps = HTMLMotionProps<'div'>;
export const Home: FC<TProps> = () => {
  const handleTap = useHome();

  return (
    <Root style={{ x: '-100%' }} {...PARENT_GLOW_PROPS}>
      <Button
        aria-label='home'
        className='glow-interactive'
        onTap={handleTap}
      >
        <Inner>Home</Inner>
      </Button>
    </Root>
  );
};
