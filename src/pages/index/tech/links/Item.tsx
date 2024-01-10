import styled from '@emotion/styled';
import { MotionValue, motion } from 'framer-motion';
import type { FC } from 'react';
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
import { TItem } from '../config/types';

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

  const borderRadiusClass = 'rounded';

  return (
    <Root
      className='relative cursor-pointer'
      {...resolveParentAnimateConfig({ isHover })}
      {...handlers}
      {...props}
    >
      {isHover && (
        <Aura
          classValue={borderRadiusClass}
          layoutId={title}
        />
      )}
      <MetalGlow
        classValue={borderRadiusClass}
        drop={16}
        color={isDarkMode ? 'accent' : 'secondary'}
        value={glow}
      />
      <MetalGlow
        classValue={borderRadiusClass}
        drop={12}
        color={isDarkMode ? 'highlight' : 'secondary'}
      />
      <Box classValue={borderRadiusClass}>
        <Glow
          text={isDarkMode ? 1.4 : 0.5}
          drop={isDarkMode ? 4 : 0.2}
          classValue={borderRadiusClass}
        >
          <Anchor
            className={clsx(
              'inline-flex relative pl-4 pr-3 py-3',
              borderRadiusClass,
            )}
            href={href}
            target='_blank'
          >
            <Icon classValue='w-10 h-10 lg:(w-12 h-12)' />
            <P1_5 />
            <Title className='+++text mt-0.75'>{title}</Title>
          </Anchor>
        </Glow>
      </Box>
    </Root>
  );
};
