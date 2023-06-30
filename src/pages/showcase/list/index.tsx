import styled from '@emotion/styled';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { Item } from './item';
import type { FC } from 'react';
import { Fragment } from 'react';
import { Space } from '@components/spaces/Space';
import type { TItem } from '@t/showcase';
import type COLORS from '@windi/config-colors.json';
import { Mark } from './item/Mark';
import { Title } from '@components/text/Title';
import { Space2 } from '@components/spaces/Space2';
import { HOVER_GLOW_PROPS } from '@pages/index/constants';

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
