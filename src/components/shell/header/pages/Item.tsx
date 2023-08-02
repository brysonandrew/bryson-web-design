import styled from '@emotion/styled';
import { useOffSound } from '@hooks/sounds/useOffSound';
import { HTMLMotionProps, motion } from 'framer-motion';
import type { FC } from 'react';
import { Link as _Link } from 'react-router-dom';
import { ThinLine } from '@components/thin-line';

const Root = styled(motion.li)``;
const Link = styled(motion(_Link))``;

type TProp = HTMLMotionProps<'li'> & {
  to: string;
  children: string;
};
export const Item: FC<TProp> = ({
  to,
  children,
  ...props
}) => {
  const handleClick = useOffSound();
  return (
    <Root className='relative px-1' {...props}>
      <Link
        to={to}
        onTap={handleClick}
        className='relative flex items-center justify-center pb-2'
        whileHover='hover'
      >
        <h2 className='relative text-md uppercase text-color-1 italic'>
          {children}
        </h2>
        <ThinLine classValue='absolute bottom-1 left-0' />
      </Link>
    </Root>
  );
};
