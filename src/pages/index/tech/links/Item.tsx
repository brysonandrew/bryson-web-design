import styled from '@emotion/styled';
import { MotionValue, motion } from 'framer-motion';
import type { FC } from 'react';
import { Glow } from '@lib/components/animation/filter-animate/Glow';
import { Box } from '@lib/components/animation/filter-animate/Box';
import { useDarkMode } from '@lib/hooks/dark-mode/context';
import { useHoverKey } from '@lib/components/cursor/hooks/useHoverKey';
import { MetalGlow } from '@components/decoration/metal/MetalGlow';
import { Aura } from '@lib/components/filters/aura/Aura';
import { P1_5 } from '@lib/components/layout/space/P1_5';
import { resolveParentAnimateConfig } from '@lib/utils/effects';
import { OPEN_IN_NEW_CURSOR_KEY } from '@lib/components/cursor/switch/config';
import clsx from 'clsx';
import { TItem } from '../config/types';

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
    <motion.div
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
          <a
            className={clsx(
              'inline-flex relative pl-4 pr-3 py-3',
              borderRadiusClass,
            )}
            href={href}
            target='_blank'
          >
            <Icon classValue='w-10 h-10 lg:(w-12 h-12)' />
            <P1_5 />
            <h4 className='title mt-0.75'>{title}</h4>
          </a>
        </Glow>
      </Box>
    </motion.div>
  );
};
