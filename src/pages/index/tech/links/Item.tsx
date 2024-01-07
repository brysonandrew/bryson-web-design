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
import clsx from 'clsx';

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

  const borderRadius = 'rounded-sm';

  return (
    <Root
      className='relative cursor-pointer'
      {...resolveParentAnimateConfig({ isHover })}
      {...handlers}
      {...props}
    >
      {isHover && (
        <Aura classValue={borderRadius} layoutId={title} />
      )}
      <MetalGlow
        classValue={borderRadius}
        drop={16}
        color={isDarkMode ? 'baby-blue' : 'teal'}
        value={glow}
      />
      <MetalGlow
        classValue={borderRadius}
        drop={12}
        color={isDarkMode ? 'teal-bright' : 'teal'}
      />
      <Box classValue={borderRadius}>
        <Glow
          text={isDarkMode ? 1.4 : 0.5}
          drop={isDarkMode ? 4 : 0.2}
          classValue={borderRadius}
        >
          <Anchor
            className={clsx(
              'inline-flex relative pl-4 pr-3 py-3',
              borderRadius,
            )}
            href={href}
            target='_blank'
          >
            <Icon classValue='w-10 h-10 lg:(w-12 h-12)' />
            <P1_5 />
            <Title className='+++text'>{title}</Title>
          </Anchor>
        </Glow>
      </Box>
    </Root>
  );
};
