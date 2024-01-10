import styled from '@emotion/styled';
import type { TItem, TProjectKey } from '@pages/projects/config/types';
import { Fragment, type FC } from 'react';
import { Item } from './item';
import { motion } from 'framer-motion';
import { P3 } from '@components/space/P3';

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
        ) => {
          const isSelected = currProject === slug;
          if (isSelected) return null;
          return (
            <Fragment key={slug}>
              {index !== 0 && <P3 element='li' />}
              <Item
                slug={slug}
                index={index}
              />
            </Fragment>
          );
        },
      )}
    </Root>
  );
};
