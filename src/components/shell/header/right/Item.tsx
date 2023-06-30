import { GlitchPorsalin } from '@components/text/glitch-porsalin';
import styled from '@emotion/styled';
import { useOffSound } from '@hooks/sounds/useOffSound';
import { useSelectHandlers } from '@hooks/useSelectHandlers';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Link as _Link } from 'react-router-dom';
import { Border as Select } from '../../../select/Border';
import { Fill } from '@components/metal/Fill';
import { HOVER_GLOW_PROPS_SM } from '@pages/index/constants';

const Root = styled(motion.li)``;
const Link = styled(motion(_Link))``;

type TProp = {
  to: string;
  children: string;
};
export const Item: FC<TProp> = ({ to, children }) => {
  const { handlers, isSelected } = useSelectHandlers(to);
  const handleClick = useOffSound();
  return (
    <Root
      className='relative mb-0.5 shadow-baby-blue-04-sm'
      {...handlers}
    >
      {isSelected && <Select />}
      <Link
        to={to}
        onClick={handleClick}
        className='relative flex items-center justify-center py-2 pl-3.5 pr-3 bg-transparent text-xxxs lg:text-xs xl:text-sm'
        {...HOVER_GLOW_PROPS_SM}
      >
        <Fill inset={1} />
        <GlitchPorsalin
          offset={2.8}
          tag='h6'
          classValue='uppercase'
        >
          {children}
        </GlitchPorsalin>
      </Link>
    </Root>
  );
};
