import { Border as Select } from '@components/select/Border';
import clsx from 'clsx';
import { Text } from '@components/text/Text';
import styled from '@emotion/styled';
import { useSelectHandlers } from '@hooks/useSelectHandlers';
import { XXXXL } from '@styles/styles';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import type { TItem } from '../../../../constants/tech';
import { Fill } from '@components/metal/Fill';

const Root = styled(motion.div)``;

const Anchor = styled.a``;

export const Item: FC<TItem> = ({ Icon, title, href }) => {
  const { handlers, isSelected } = useSelectHandlers(title);
  return (
    <Root className='inline-flex relative ' {...handlers}>
      {isSelected && <Select />}
      <Anchor
        className={clsx(
          'relative px-4 py-2 lg:py-3 lg:px-5 xl:py-4 xl:px-6',
          'bg-white-01 shadow-baby-blue-04-sm',
        )}
        href={href}
        target='_blank'
      >
        <Fill
          inset={1}
        />
        <div className='relative flex items-center z-10'>
          <Icon classValue={XXXXL} />
          <div className='p-2' />
          <Text>{title}</Text>
        </div>
      </Anchor>
    </Root>
  );
};
