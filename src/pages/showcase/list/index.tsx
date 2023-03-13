import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Item } from "./item";
import type { FC } from "react";
import { Fragment } from "react";
import { Space } from "@components/spaces/Space";
import { pascalToTitle } from "@utils/format";
import * as components from "../components";

const Root = styled(motion.ul)``;

type TProps = {
  isSelectedItem?: boolean;
};
export const List: FC<TProps> = () => {
  const itemKeys = Object.keys(components);
  return (
    <Root className="text-teal">
      {itemKeys.map((name: string, index: number) => (
        <Fragment key={name}>
          {index !== 0 && <Space />}
          <Item name={pascalToTitle(name)}>
            {pascalToTitle(name)}
          </Item>
        </Fragment>
      ))}
    </Root>
  );
};
