import styled from '@emotion/styled';
import type { TItem } from '@t/projects';
import { type FC } from 'react';
import { Item } from './item';
import { TProjectKey } from '@constants/projects';
import { resolveCompositeKey } from '@utils/keys';
import { motion, useMotionValue } from 'framer-motion';

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
    <Root className='relative mt-1 z-0'>
      {items.map(
        (
          { slug }: TItem,
          index: number,
          { length: count },
        ) => {
          const isSelected = currProject === slug;
          if (isSelected) return null;
          return (
            <Item
              key={slug}
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
