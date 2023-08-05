import styled from '@emotion/styled';
import type { TItem } from '@t/projects';
import { type FC } from 'react';
import { Item } from './item';
import { TProjectKey } from '@constants/projects';

const Root = styled.ul``;

type TProps = {
  currProject: TProjectKey | null;
  items: TItem[];
};
export const List: FC<TProps> = ({
  items,
  currProject,
}) => {
  return (
    <Root className='mt-1'>
      {items.map(
        (
          { slug }: TItem,
          index: number,
          { length: count },
        ) => {
          const itemKey = slug;
          const isSelected = currProject === slug;
          if (isSelected) return null;
          return (
            <Item
              key={itemKey}
              slug={itemKey}
              isLast={index === count - 1}
            />
          );
        },
      )}
    </Root>
  );
};
