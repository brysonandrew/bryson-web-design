import { Space2 } from '@components/spaces/Space2';
import styled from '@emotion/styled';
import type { TItem } from '@t/showcase';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Fragment } from 'react';
import { Item } from './item';

const Root = styled(motion.ul)``;

type TProps = {
  selectedPath: string | null;
  items: TItem[];
};
export const List: FC<TProps> = ({
  items,
  selectedPath,
}) => (
  <Root>
    {items.map((item: TItem, index: number) => (
      <Fragment key={item.title}>
        {index !== 0 && <Space2 />}
        <Item {...item} selectedPath={selectedPath} />
      </Fragment>
    ))}
  </Root>
);
