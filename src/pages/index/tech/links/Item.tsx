import clsx from 'clsx';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import type { TItem } from '@constants/tech';
import { Glow } from '@components/glow';
import { PARENT_GLOW_PROPS } from '@constants/colors';
import { Border as Select } from '@components/select/Border';
import { MetalDark } from '@components/metal/MetalDark';
import { Box } from '@components/glow/Box';
import { useHover } from '@hooks/useHover';

const Root = styled(motion.div)``;
const Anchor = styled.a``;
const Title = styled.h4``;

export const Item: FC<TItem> = ({
  Icon,
  title,
  href,
  ...props
}) => {
  const { isHover, ...handlers } = useHover();

  return (
    <Root
      className={clsx('relative cursor-pointer')}
      {...PARENT_GLOW_PROPS}
      {...handlers}
      {...props}
    >
      {isHover && <Select layoutId={title} />}
      <Glow text={1} drop={8} color='white'>
        <MetalDark />
      </Glow>
      <Box>
        <Glow text={1} drop={4} color='teal'>
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
              <Title className='text-xl2'>{title}</Title>
            </div>
          </Anchor>
        </Glow>
      </Box>
    </Root>
  );
};
