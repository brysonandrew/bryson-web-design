import { type FC } from 'react';
import { Metal } from '@components/metal';
import styled from '@emotion/styled';
import { useHome } from '@hooks/useHome';
import {
  motion,
  type HTMLMotionProps,
} from 'framer-motion';
import { INTERACTIVE_PROPS } from './constants';
import { TextXl } from '@components/text/TextXl';
const Root = styled(motion.div)``;
const Button = styled(motion.button)``;

type TProps = HTMLMotionProps<'div'>;
export const Home: FC<TProps> = () => {
  const handleTap = useHome();

  return (
    <Root style={{ x: '-100%' }}>
      <Button onTap={handleTap} {...INTERACTIVE_PROPS}>
        <Metal />
        <TextXl>Home</TextXl>
      </Button>
    </Root>
  );
};
