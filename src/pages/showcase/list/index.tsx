import { Space2 } from '@components/spaces/Space2';
import { TitleOffset } from '@components/spaces/TitleOffset';
import { Title } from '@components/text/Title';
import styled from '@emotion/styled';
import type { TItem } from '@t/showcase';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Fragment } from 'react';
import { Item } from './item';

const Root = styled(motion.div)``;
const _List = styled(motion.ul)``;

type TProps = {
  header: string;
  selectedPath: string | null;
  items: TItem[];
};
export const List: FC<TProps> = ({
  header,
  items,
  selectedPath,
}) => (
  <Root>
    <Title>{header}</Title>
    <TitleOffset />
    <_List>
      {items.map((item: TItem, index: number) => (
        <Fragment key={item.title}>
          {index !== 0 && <Space2 />}
          <Item {...item} selectedPath={selectedPath} />
        </Fragment>
      ))}
    </_List>
  </Root>
);
