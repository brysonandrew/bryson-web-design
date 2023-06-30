import { Border as Select } from '@components/select/Border';
import styled from '@emotion/styled';
import { useSelectHandlers } from '@hooks/useSelectHandlers';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Link as __Link } from 'react-router-dom';
import { Title } from './Title';
import { useOffSound } from '@hooks/sounds/useOffSound';
import { Fill } from '@components/metal/Fill';
import { HOVER_GLOW_PROPS_SM } from '@pages/index/constants';
import { useHome } from '@hooks/useHome';

const TITLE_ID = 'TITLE_ID';

const Root = styled(motion.div)``;

const _Link = styled(motion(__Link))``;

export const Link: FC = () => {
  const { handlers, isSelected } =
    useSelectHandlers(TITLE_ID);
  const handleResetScroll = useHome();
  const handleClick = useOffSound();

  return (
    <Root onTap={handleResetScroll} {...handlers}>
      <_Link
        className='relative -left-1 flex flex-col px-1 cursor-pointer'
        to='/'
        onTap={handleClick}
        {...HOVER_GLOW_PROPS_SM}
      >
        {isSelected && (
          <Select classValue='-inset-0.5 bg-teal' />
        )}
        <Fill />
        <Title />
      </_Link>
    </Root>
  );
};
