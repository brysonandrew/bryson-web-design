import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Fragment, type FC } from "react";

const Root = styled(motion.div)``;
const Items = styled.ul``;
const Item = styled.li``;

type TProps = {
  title: string;
  record: Record<string, string>;
};
export const Controls: FC<TProps> = ({ title, record }) => (
  <Root
    key="Controls"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <h4>{title}</h4>
    <div className="py-1" />
    <Items className="px-2">
      {Object.entries(record).map(
        ([key, value]: [string, string], index: number) => (
          <Fragment key={key}>
            {index !== 0 && <Item className="p-1" />}
            <Item className="flex items-center justify-between bg-red">
              <h6>{key}</h6>
              <div className="p-1" />
              <h6>{value}</h6>
            </Item>
          </Fragment>
        ),
      )}
    </Items>
  </Root>
);
