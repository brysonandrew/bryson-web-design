import styled from '@emotion/styled';
import { useOffSound } from '@hooks/sounds/useOffSound';
import { useSelectHandlers } from '@hooks/useSelectHandlers';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Link as _Link } from 'react-router-dom';
import { Fill } from '@components/metal/Fill';
import { ThinLine } from '@components/thin-line';

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
    <Root className='relative mb-0.5'>
      <Link
        to={to}
        onClick={handleClick}
        className='relative flex items-center justify-center py-0.5 pl-1.5 pr-2'
        whileHover='hover'
      >
        {isSelected && <Fill inset={1} />}
        <h6 className='relative text-md uppercase text-baby-blue italic'>
          {children}
        </h6>
        <ThinLine classValue='absolute -bottom-1 left-0' />
      </Link>
    </Root>
  );
};
