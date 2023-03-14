import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Item } from "./item";
import { FC } from "react";
import { Fragment } from "react";
import { Space } from "@components/spaces/Space";

const Root = styled(motion.ul)``;

type TProps = {
  paths: string[];
  isSelectedItem?: boolean;
};
export const List: FC<TProps> = ({ paths }) => {
  return (
    <Root className="text-teal">
      {paths.map((path: string, index: number) => (
        <Fragment key={path}>
          {index !== 0 && <Space />}
          <Item path={path} />
        </Fragment>
      ))}
    </Root>
  );
};
