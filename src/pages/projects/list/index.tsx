import { Space2 } from '@components/spaces/Space2';
import styled from '@emotion/styled';
import type { TItem } from '@t/projects';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Fragment } from 'react';
import { Item } from './item';
import { TProjectKey } from '@constants/projects';

const Root = styled(motion.ul)``;

type TProps = {
  currProject: TProjectKey | null;
  items: TItem[];
};
export const List: FC<TProps> = ({ items, currProject }) => (
  <Root className='mt-1'>
    {items.map(({ slug }: TItem, index: number) => {
      const itemKey = slug;
      const isSelected = currProject === slug;
      if (isSelected) return null;
      return (
        <Fragment key={itemKey}>
          {index !== 0 && <Space2 element='li' />}
          <Item slug={itemKey} />
        </Fragment>
      );
    })}
  </Root>
);
