import styled from '@emotion/styled';
import type { TItem } from '@t/projects';
import { useState, type FC } from 'react';
import { Item } from './item';
import { TProjectKey } from '@constants/projects';
import { resolveCompositeKey } from '@utils/keys';
import { motion } from 'framer-motion';
import { TSlugProps } from '../config';

const Root = styled(motion.ul)``;

export type TPrev = { index: number; value: number };

type TProps = {
  currProject: TProjectKey | null;
  items: TItem[];
};
export const List: FC<TProps> = ({
  items,
  currProject,
}) => {
  return (
    <Root className='relative mt-1'>
      {items.map(
        (
          { slug }: TItem,
          index: number,
          { length: count },
        ) => {
          const itemKey = resolveCompositeKey(
            'List',
            slug,
            index,
          );
          const isSelected = currProject === slug;
          if (isSelected) return null;
          return (
            <Item
              key={itemKey}
              slug={slug}
              index={index}
              count={count}
            />
          );
        },
      )}
    </Root>
  );
};
