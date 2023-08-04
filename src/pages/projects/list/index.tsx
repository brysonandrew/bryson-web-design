import { Space2 } from '@components/spaces/Space2';
import styled from '@emotion/styled';
import type { TItem } from '@t/projects';
import { Fragment, type FC } from 'react';
import { Item } from './item';
import { TProjectKey } from '@constants/projects';
import { useOnSound } from '@hooks/sounds/useOnSound';

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
      {items.map(({ slug }: TItem, index: number) => {
        const itemKey = slug;
        const isSelected = currProject === slug;
        if (isSelected) return null;
        return (
          <Fragment key={itemKey}>
            {index !== 0 && <Space2  />}
            <Item slug={itemKey} />
          </Fragment>
        );
      })}
    </Root>
  );
};
