import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Item } from "./item";
import { FC } from "react";
import { Fragment } from "react";
import { Space } from "@components/spaces/Space";

const Root = styled(motion.ul)``;

type TProps = {
  keys: string[];
  isSelectedItem?: boolean;
};
export const List: FC<TProps> = ({ keys }) => {
  console.log("🚀 ~ file: index.tsx:15 ~ keys:", keys)
  
  return (
    <Root className="text-teal">
      {keys.map((key: string, index: number) => (
        <Fragment key={key}>
          {index !== 0 && <Space />}
          <Item path={key}>{key}</Item>
        </Fragment>
      ))}
    </Root>
  );
};
