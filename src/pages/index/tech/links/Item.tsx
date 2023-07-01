import { Border as Select } from '@components/select/Border';
import clsx from 'clsx';
import { Text } from '@components/text/Text';
import styled from '@emotion/styled';
import { useSelectHandlers } from '@hooks/useSelectHandlers';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import type { TItem } from '../../../../constants/tech';
import { Fill } from '@components/metal/Fill';
import { HOVER_GLOW_PROPS } from '@pages/index/constants';

const Root = styled(motion.div)``;

const Anchor = styled.a``;

export const Item: FC<TItem> = ({ Icon, title, href }) => {
  const { handlers, isSelected } = useSelectHandlers(title);

  return (
    <Root
      className='inline-flex relative'
      style={{ z: title === 'React' ? 40 : -60 }}
      {...HOVER_GLOW_PROPS}
      {...handlers}
    >
      {isSelected && <Select />}
      <Anchor
        className={clsx(
          'relative px-4 py-2 lg:py-3 lg:px-5 xl:py-4 xl:px-6 shadow-baby-blue-04-sm',
        )}
        href={href}
        target='_blank'
      >
        <Fill inset={1} />
        <div className='relative flex items-center z-10'>
          <Icon classValue='h-10 w-10' />
          <div className='p-2' />
          <Text>{title}</Text>
        </div>
      </Anchor>
    </Root>
  );
};
