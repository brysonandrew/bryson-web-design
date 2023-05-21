import styled from "@emotion/styled";
import clsx from "clsx";
import { motion } from "framer-motion";
import { Item } from "./item";
import type { FC } from "react";
import { Fragment } from "react";
import { Space } from "@components/spaces/Space";
import type { TItem } from "@t/showcase";
import type COLORS from "@windi/config-colors.json";
import { Mark } from "./Mark";

const Root = styled(motion.div)``;
const _List = styled(motion.ul)``;
const Title = styled(motion.h4)``;

type TProps = {
  header: string;
  selectedPath: string | null;
  items: TItem[];
  color: keyof typeof COLORS;
};
export const List: FC<TProps> = ({
  header,
  items,
  selectedPath,
  color,
}) => (
  <Root>
    <Title
      className={clsx("uppercase text-4xl text-center")}
      style={{ color }}
    >
      {header}
    </Title>
    <div className="py-1" />
    <_List>
      {items.map((item: TItem, index: number) => (
        <Fragment key={item.title}>
          {index !== 0 && <Space />}
          <Item {...item} selectedPath={selectedPath}>
            <Mark color={color} />
          </Item>
        </Fragment>
      ))}
    </_List>
  </Root>
);
