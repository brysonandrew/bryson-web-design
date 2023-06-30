import styled from '@emotion/styled';
import { useOffSound } from '@hooks/sounds/useOffSound';
import { useSelectHandlers } from '@hooks/useSelectHandlers';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Link as _Link } from 'react-router-dom';
import { Border as Select } from '../../../select/Border';
import { Fill } from '@components/metal/Fill';
import { HOVER_GLOW_PROPS_SM } from '@pages/index/constants';
import { THIN_LINE_CLASS } from '@components/ThinLineGap';
import clsx from 'clsx';

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
    <Root className='relative mb-0.5' {...handlers}>
      {isSelected && (
        <Select classValue='-inset-0.5 bg-teal' />
      )}
      <Link
        to={to}
        onClick={handleClick}
        className='relative flex items-center justify-center py-0.5 pl-1.5 pr-2'
        {...HOVER_GLOW_PROPS_SM}
      >
        {isSelected && <Fill inset={1} />}
        <h6 className='relative text-md uppercase text-baby-blue italic'>
          {children}
        </h6>
      </Link>
      <hr
        className={clsx(
          'absolute top-full',
          THIN_LINE_CLASS,
        )}
      />
    </Root>
  );
};
