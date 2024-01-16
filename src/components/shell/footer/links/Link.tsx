import styled from '@emotion/styled';
import type { FC } from 'react';
import { TLink } from './config';
import { motion } from 'framer-motion';
import { useHoverKey } from '@lib/cursor/hooks/useHoverKey';
import { useOnSound } from '@lib/hooks/sounds/useOnSound';
import { resolveInteractiveLabels } from '@lib/utils/attributes/resolveInteractiveLabels';
import { resolveParentAnimateConfig } from '@lib/animation/components/filter-animate/utils';
import { CUSTOM_CURSOR_KEY } from '@lib/cursor/switch/config';
import { useApp } from '@lib/context/app/useApp';

const Root = styled(motion.a)``;

type TProps = TLink;
export const Link: FC<TProps> = ({ href, title, Icon }) => {
  const { Texture, Glow, GLOW } = useApp();
  const { isHover, handlers } = useHoverKey(
    CUSTOM_CURSOR_KEY,
    href,
  );
  const handleOn = useOnSound();

  return (
    <Root
      className='relative -left-1.5 row pt-0.75 pb-1 pl-1.5 pr-2 cursor-pointer'
      href={href}
      target='_blank'
      style={{ boxShadow: GLOW['accent'] }}
      onClick={handleOn}
      {...resolveInteractiveLabels(title)}
      {...resolveParentAnimateConfig({ isHover })}
      {...handlers}
    >
      <Glow>
        <Texture />
      </Glow>
      <div className='relative column-start w-5'>
        <Icon classValue='text-color' />
      </div>
      <div className='p-1' />
      <div className='relative row items-end'>
        <span className=' text-sm italic uppercase -ml-0.5 mt-0'>
          {title}
        </span>
      </div>
    </Root>
  );
};
