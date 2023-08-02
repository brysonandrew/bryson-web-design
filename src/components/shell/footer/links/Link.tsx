import styled from '@emotion/styled';
import type { FC, PointerEvent } from 'react';
import { TLink } from './config';
import { MetalGlow } from '@components/metal/MetalGlow';
import { PARENT_GLOW_PROPS } from '@constants/colors';
import {
  AnimatePresence,
  motion,
  useMotionValue,
} from 'framer-motion';
import { OpenInNew } from '@components/icons/OpenInNew';
import { useCursor } from '../../../cursor/useCursor';
import { Cursor } from '../../../cursor';

const Root = styled(motion.li)``;

type TProps = TLink;
export const Link: FC<TProps> = ({
  href,
  title,
  subTitle,
  Icon,
}) => {
  const { isHover, cursorX, cursorY, ...handlers } =
    useCursor();

  return (
    <Root
      className='relative -left-1.5 glow-interactive'
      {...PARENT_GLOW_PROPS}
    >
      <MetalGlow />
      <motion.a
        className='relative row pt-0.75 pb-1 pl-1.5 pr-2 rounded-sm cursor-pointer'
        href={href}
        target='_blank'
        {...handlers}
      >
        <div className='column-start w-5'>
          <Icon classValue='text-color' />
        </div>
        <div className='p-1' />
        <div className='row items-end'>
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
        <AnimatePresence>
          {isHover && (
            <Cursor
              key='CURSOR'
              {...{ cursorX, cursorY }}
            />
          )}
        </AnimatePresence>
      </motion.a>
    </Root>
  );
};
