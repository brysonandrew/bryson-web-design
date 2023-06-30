import { type FC } from 'react';
import { Fill } from '@components/metal/Fill';
import { Border as Select } from '@components/select/Border';
import { Text } from '@components/text/Text';
import styled from '@emotion/styled';
import { useHome } from '@hooks/useHome';
import { useSelectHandlers } from '@hooks/useSelectHandlers';
import {
  motion,
  type HTMLMotionProps,
} from 'framer-motion';
import { INTERACTIVE_PROPS } from './constants';
const Root = styled(motion.div)``;
const Button = styled(motion.button)``;

type TProps = HTMLMotionProps<'div'>;
export const Home: FC<TProps> = () => {
  const { handlers, isSelected } =
    useSelectHandlers('Home');

  const handleTap = useHome();

  return (
    <Root style={{ x: 'calc(-100% + 10px)' }} {...handlers}>
      <Button onTap={handleTap} {...INTERACTIVE_PROPS}>
        {isSelected ? <Select /> : null}
        <Fill inset={2} />
        <Text classValue='relative'>Home</Text>
      </Button>
    </Root>
  );
};
