import styled from '@emotion/styled';
import type { TItem } from '@t/projects';
import { useState, type FC } from 'react';
import { Item, TUpdatePrevsConfig } from './item';
import { TProjectKey } from '@constants/projects';
import { LayoutGroup } from 'framer-motion';

const Root = styled.ul``;

export type TPrevs = (number | null)[];

type TProps = {
  currProject: TProjectKey | null;
  items: TItem[];
};
export const List: FC<TProps> = ({
  items,
  currProject,
}) => {
  const [prevs, setPrevs] = useState<TPrevs>([]);
  const handleUpdatePrevs = ({
    index,
    value,
  }: TUpdatePrevsConfig) => {
    setPrevs((prevs) => {
      const next = [...prevs];
      next[index] = value;
      return next;
    });
  };
  
  return (
    <Root className='relative mt-1'>
      <LayoutGroup>
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
                index={index}
                slug={itemKey}
                isLast={index === count - 1}
                prevs={prevs}
                onUpdatePrevs={handleUpdatePrevs}
              />
            );
          },
        )}
      </LayoutGroup>
    </Root>
  );
};
