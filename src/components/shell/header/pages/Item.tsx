import styled from '@emotion/styled';
import { useOffSound } from '@hooks/sounds/useOffSound';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Link as _Link } from 'react-router-dom';
import { ThinLine } from '@components/thin-line';

const Root = styled(motion.li)``;
const Link = styled(motion(_Link))``;

type TProp = {
  to: string;
  children: string;
};
export const Item: FC<TProp> = ({ to, children }) => {
  const handleClick = useOffSound();
  return (
    <Root className='relative p-1 overflow-hidden'>
      <Link
        to={to}
        onTap={handleClick}
        className='relative flex items-center justify-center pb-2'
        whileHover='hover'
      >
        <h6 className='relative text-md uppercase text-baby-blue italic'>
          {children}
        </h6>
        <ThinLine classValue='absolute bottom-1 left-0' />
      </Link>
    </Root>
  );
};
