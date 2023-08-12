import styled from '@emotion/styled';
import type { TItem } from '@t/projects';
import { Fragment, type FC } from 'react';
import { Item } from './item';
import { TProjectKey } from '@constants/projects';
import { motion } from 'framer-motion';
import { Space3 } from '@components/spaces/Space3';

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
            <Fragment key={slug}>
              {index !== 0 && <Space3 element='li' />}
              <Item
                slug={slug}
                index={index}
                count={count}
              />
            </Fragment>
          );
        },
      )}
    </Root>
  );
};
