import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { ITEMS } from "../config";
import { Item } from "./item";
import type { FC } from "react";
import { Fragment } from "react";
import { Space } from "@components/spaces/Space";

const Root = styled(motion.ul)``;

type TProps = {
  isSelectedItem: boolean;
};
export const List: FC<TProps> = ({
  isSelectedItem,
}) => (
  <Root className="text-teal">
    {ITEMS.map((name: string, index: number) => (
      <Fragment key={name}>
        {index !== 0 && <Space />}
        <Item isSelectedItem={isSelectedItem}>{name}</Item>
      </Fragment>
    ))}
  </Root>
);
