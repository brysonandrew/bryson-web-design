import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Item } from "./item";
import type { FC } from "react";
import { Fragment } from "react";
import { Space } from "@components/spaces/Space";
import { TItem } from "@t/showcase";

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
  <Root className="text-teal">
    <h4 className="uppercase pl-4 text-gray-lighter">{header}</h4>
    <div className="py-1" />
    <_List>
      {items.map((item: TItem, index: number) => (
        <Fragment key={item.title}>
          {index !== 0 && <Space />}
          <Item {...item} selectedPath={selectedPath} />
        </Fragment>
      ))}
    </_List>
  </Root>
);
