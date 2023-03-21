import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Item } from "./item";
import type { FC } from "react";
import { Fragment } from "react";
import { Space } from "@components/spaces/Space";

const Root = styled(motion.ul)``;

type TProps = {
  names: string[];
  isSelectedItem?: boolean;
};
export const List: FC<TProps> = ({ names }) => (
  <Root className="text-teal">
    {names.map((name: string, index: number) => (
      <Fragment key={name}>
        {index !== 0 && <Space />}
        <Item name={name}>{name}</Item>
      </Fragment>
    ))}
  </Root>
);
