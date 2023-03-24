import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Item } from "./item";
import type { FC } from "react";
import { Fragment } from "react";
import { Space } from "@components/spaces/Space";
import type { TItem } from "@constants/showcase";
import { ITEMS } from "@constants/showcase";

const Root = styled(motion.ul)``;

type TProps = {
  selectedPath: string | null;
};
export const List: FC<TProps> = ({selectedPath}) => (
  <Root className="text-teal">
    {ITEMS.map((item: TItem, index: number) => (
      <Fragment key={item.title}>
        {index !== 0 && <Space />}
        <Item {...item} selectedPath={selectedPath}/>
      </Fragment>
    ))}
  </Root>
);
