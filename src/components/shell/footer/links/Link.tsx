import styled from '@emotion/styled';
import type { FC } from 'react';
import { TLink } from './config';
import { MetalGlow } from '@components/metal/MetalGlow';
import { PARENT_GLOW_PROPS } from '@utils/effects/glow';
import { motion } from 'framer-motion';
import { useHoverKey } from '@hooks/useHoverKey';

const Root = styled(motion.a)``;

type TProps = TLink;
export const Link: FC<TProps> = ({
  href,
  title,
  Icon,
}) => {
  const { isHover, ...handlers } = useHoverKey(
    'open-in-new',
    href,
  );

  return (
    <Root
      className='relative -left-1.5 row pt-0.75 pb-1 pl-1.5 pr-2 rounded-sm cursor-pointer glow-interactive'
      href={href}
      target='_blank'
      {...PARENT_GLOW_PROPS}
      {...handlers}
    >
      <MetalGlow isDarkest /> 
      <div className='relative column-start w-5'>
        <Icon classValue='text-color' />
      </div>
      <div className='p-1' />
      <div className='relative row items-end'>
        <h5 className='text-color-1 text-sm italic uppercase -ml-0.5 mt-0'>
          {title}
        </h5>
      </div>
    </Root>
  );
};
