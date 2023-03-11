import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { ITEMS } from "../config";
import { Item } from "./item";
import { Fragment } from "react";
import { Space } from "@components/spaces/Space";

const Root = styled(motion.ul)``;

export const List = () => (
  <Root className="text-teal">
    {ITEMS.map((name: string, index: number) => (
      <Fragment key={name}>
        {index !== 0 && <Space />}
        <Item>{name}</Item>
      </Fragment>
    ))}
  </Root>
);
