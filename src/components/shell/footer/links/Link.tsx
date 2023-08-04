import styled from '@emotion/styled';
import type { FC } from 'react';
import { TLink } from './config';
import { MetalGlow } from '@components/metal/MetalGlow';
import { PARENT_GLOW_PROPS } from '@constants/colors';
import { motion } from 'framer-motion';
import { useHoverKey } from '@hooks/useHoverKey';

const Root = styled(motion.a)``;

type TProps = TLink;
export const Link: FC<TProps> = ({
  href,
  title,
  subTitle,
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
      <MetalGlow />
      <div className='relative column-start w-5'>
        <Icon classValue='text-color' />
      </div>
      <div className='p-1' />
      <div className='relative row items-end'>
        <h5 className='text-color-1 text-sm italic uppercase -ml-0.5 mt-0'>
          {title}
        </h5>
        <div className='hidden sm:flex row'>
          <div className='p-1' />
          <motion.h6
            className='uppercase italic text-xs text-color'
            variants={{
              animate: { opacity: 0.6 },
              hover: { opacity: 1 },
            }}
          >
            {subTitle}
          </motion.h6>
        </div>
      </div>
    </Root>
  );
};
