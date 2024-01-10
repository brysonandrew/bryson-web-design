import styled from '@emotion/styled';
import type { FC } from 'react';
import { TLink } from './config';
import { MetalGlow } from '@components/metal/MetalGlow';
import { motion } from 'framer-motion';
import { useHoverKey } from '@hooks/cursor/useHoverKey';
import { useOnSound } from '@hooks/sounds/useOnSound';
import { resolveInteractiveLabels } from '@utils/attributes/resolveInteractiveLabels';
import { resolveParentAnimateConfig } from '@utils/effects';
import { OPEN_IN_NEW_CURSOR_KEY } from '@components/cursor/switch/config';

const Root = styled(motion.a)``;

type TProps = TLink;
export const Link: FC<TProps> = ({ href, title, Icon }) => {
  const { isHover, handlers } = useHoverKey(
    OPEN_IN_NEW_CURSOR_KEY,
    href,
  );
  const handleOn = useOnSound();

  return (
    <Root
      className='relative -left-1.5 row pt-0.75 pb-1 pl-1.5 pr-2 cursor-pointer glow'
      href={href}
      target='_blank'
      onClick={handleOn}
      {...resolveInteractiveLabels(title)}
      {...resolveParentAnimateConfig({ isHover })}
      {...handlers}
    >
      <MetalGlow isDarkest classValue='glow-accent' />
      <div className='relative column-start w-5'>
        <Icon classValue='text-color' />
      </div>
      <div className='p-1' />
      <div className='relative row items-end'>
        <span className='text-g-bb text-sm italic uppercase -ml-0.5 mt-0'>
          {title}
        </span>
      </div>
    </Root>
  );
};
