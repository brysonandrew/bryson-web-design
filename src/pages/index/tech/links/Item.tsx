import { Border as Select } from '@components/select/Border';
import clsx from 'clsx';
import styled from '@emotion/styled';
import { useSelectHandlers } from '@hooks/useSelectHandlers';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import type { TItem } from '@constants/tech';
import { Metal } from '@components/metal';
import { resolveTealGlow } from '@constants/colors';
import { TextXl2 } from '@components/text/TextXl2';

const Root = styled(motion.div)``;

const Anchor = styled.a``;

export const Item: FC<TItem> = ({
  Icon,
  title,
  href,
  ...props
}) => {
  const { handlers, isSelected } = useSelectHandlers(title);
  const rootPropsWithTealGlow = resolveTealGlow({
    classValue: clsx(
      'inline-flex relative',
    ),
  });
  return (
    <Root
      {...rootPropsWithTealGlow}
      {...handlers}
      {...props}
    >
      {isSelected && <Select layoutId={title} />}
      <Anchor
        className={clsx(
          'relative px-4 py-2 lg:py-3 lg:px-5 xl:py-4 xl:px-6',
        )}
        href={href}
        target='_blank'
      >
        <Metal />
        <div className='relative flex items-center z-10'>
          <Icon classValue='h-10 w-10' />
          <div className='p-2' />
          <TextXl2>{title}</TextXl2>
        </div>
      </Anchor>
    </Root>
  );
};
