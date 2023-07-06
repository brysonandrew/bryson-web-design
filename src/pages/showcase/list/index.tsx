import { Space2 } from '@components/spaces/Space2';
import styled from '@emotion/styled';
import type { TItem } from '@t/showcase';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Fragment } from 'react';
import { Item } from './item';
import { TAppItemKey } from '@constants/apps';

const Root = styled(motion.ul)``;

type TProps = {
  currSource: TAppItemKey | null;
  items: TItem[];
};
export const List: FC<TProps> = ({
  items,
  currSource,
}) => (
  <Root className='mt-1'>
    {items.map(({slug}: TItem, index: number) => {
      const itemKey = slug;
      const isSelected = currSource === slug;
      if (isSelected) return null;
      return (
        <Fragment key={itemKey}>
          {index !== 0 && <Space2 />}
          <Item slug={itemKey} />
        </Fragment>
      );
    })}
  </Root>
);
