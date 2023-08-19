import clsx from 'clsx';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import type { TItem } from '@constants/tech';
import { Glow } from '@components/filter-animate/Glow';
import { Box } from '@components/filter-animate/Box';
import { useContext } from '@state/Context';
import { useHoverKey } from '@hooks/cursor/useHoverKey';
import { MetalGlow } from '@components/metal/MetalGlow';
import { Aura } from '@components/filters/aura/Aura';
import { P1_5 } from '@components/space/P1_5';
import { resolveParentAnimateConfig } from '@utils/effects';

const Root = styled(motion.div)``;
const Anchor = styled.a``;
const Title = styled.h4``;

export const Item: FC<TItem> = ({
  Icon,
  title,
  href,
  ...props
}) => {
  const {
    darkMode: { isDarkMode },
  } = useContext();
  const { isHover, handlers } = useHoverKey(
    'open-in-new',
    href,
  );
  const BORDER_RADIUS = {
    classValue: clsx('rounded-lg'),
  };

  return (
    <Root
      className='relative cursor-pointer'
      {...resolveParentAnimateConfig({ isHover })}
      {...handlers}
      {...props}
    >
      {isHover && <Aura layoutId={title} />}
      <MetalGlow
        drop={isDarkMode ? 12 : 4}
        color={isDarkMode ? 'white' : 'gray-3'}
        {...BORDER_RADIUS}
      />
      <Box {...BORDER_RADIUS}>
        <Glow
          {...BORDER_RADIUS}
          text={isDarkMode ? 1.4 : 0.5}
          drop={isDarkMode ? 4 : 0.5}
        >
          <Anchor
            className='inline-flex relative pl-4 pr-3 py-3'
            href={href}
            target='_blank'
          >
            <div className='relative row z-10'>
              <Icon classValue='w-10 h-10 lg:w-12 lg:h-12' />
              <P1_5 />
              <Title className='+++text'>{title}</Title>
            </div>
          </Anchor>
        </Glow>
      </Box>
    </Root>
  );
};
