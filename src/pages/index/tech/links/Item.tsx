import clsx from 'clsx';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import type { TItem } from '@constants/tech';
import { Glow } from '@components/filter-animate/Glow';
import { Border as Select } from '@components/select/Border';
import { Box } from '@components/filter-animate/Box';
import { useContext } from '@state/Context';
import { useHoverKey } from '@hooks/useHoverKey';
import { PARENT_GLOW_PROPS } from '@utils/effects/glow';
import { MetalGlow } from '@components/metal/MetalGlow';

const Root = styled(motion.div)``;
const Anchor = styled.a``;
const Title = styled.h4`

`;

export const Item: FC<TItem> = ({
  Icon,
  title,
  href,
  ...props
}) => {
  const {
    darkMode: { isDarkMode },
  } = useContext();
  const { isHover, ...handlers } = useHoverKey(
    'open-in-new',
    href,
  );

  return (
    <Root
      className={'relative cursor-pointer'}
      {...PARENT_GLOW_PROPS}
      {...handlers}
      {...props}
    >
      {isDarkMode && isHover && <Select layoutId={title} />}
      <MetalGlow
        drop={16}
        color={isDarkMode ? 'white' : 'baby-blue'}
      />
      <Box>
        <Glow
          text={2.8}
          drop={4}
          color={isDarkMode ? 'teal' : 'baby-blue'}
        >
          <Anchor
            className={clsx(
              'inline-flex relative px-4 py-2 lg:py-3 lg:px-5 xl:py-4 xl:px-6',
            )}
            href={href}
            target='_blank'
          >
            <div className='relative flex items-center z-10'>
              <Icon classValue='h-10 w-10' />
              <div className='p-2' />
              <Title className='+++text'>{title}</Title>
            </div>
          </Anchor>
        </Glow>
      </Box>
    </Root>
  );
};
