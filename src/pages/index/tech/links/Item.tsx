import styled from '@emotion/styled';
import { MotionValue, motion } from 'framer-motion';
import type { FC } from 'react';
import type { TItem } from '@constants/tech';
import { Glow } from '@components/filter-animate/Glow';
import { Box } from '@components/filter-animate/Box';
import { useDarkMode } from '@context/dark-mode';
import { useHoverKey } from '@hooks/cursor/useHoverKey';
import { MetalGlow } from '@components/metal/MetalGlow';
import { Aura } from '@components/filters/aura/Aura';
import { P1_5 } from '@components/space/P1_5';
import { resolveParentAnimateConfig } from '@utils/effects';
import { OPEN_IN_NEW_CURSOR_KEY } from '@components/cursor/switch/config';

const Root = styled(motion.div)``;
const Anchor = styled.a``;
const Title = styled.h4``;

export const Item: FC<TItem & { glow?: MotionValue }> = ({
  Icon,
  title,
  href,
  glow,
  ...props
}) => {
  const { isDarkMode } = useDarkMode();

  const { isHover, handlers } = useHoverKey(
    OPEN_IN_NEW_CURSOR_KEY,
    href,
  );

  return (
    <Root
      className='relative cursor-pointer'
      {...resolveParentAnimateConfig({ isHover })}
      {...handlers}
      {...props}
    >
      {isHover && <Aura layoutId={title} />}
      {typeof glow !== 'undefined' && (
        <MetalGlow
          drop={isDarkMode ? 16 : 8}
          color={isDarkMode ? 'baby-blue' : 'gray-3'}
          value={glow}
        />
      )}
      <MetalGlow
        drop={isDarkMode ? 12 : 4}
        color={isDarkMode ? 'teal-bright' : 'baby-blue'}
      />
      <Box>
        <Glow
          text={isDarkMode ? 1.4 : 0.5}
          drop={isDarkMode ? 4 : 0.5}
        >
          <Anchor
            className='inline-flex relative pl-4 pr-3 py-3'
            href={href}
            target='_blank'
          >
            <div className='relative row z-10'>
              <Icon classValue='w-10 h-10 lg:(w-12 h-12)' />
              <P1_5 />
              <Title className='+++text'>{title}</Title>
            </div>
          </Anchor>
        </Glow>
      </Box>
    </Root>
  );
};
