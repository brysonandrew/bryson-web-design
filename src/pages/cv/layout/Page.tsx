import styled from "@emotion/styled";
import { useStyles } from "@styles/useStyles";
import { TChildren } from "@t/index";
import { motion } from "framer-motion";
import { FC } from "react";
import { SIZE } from "../constants";

const Root = styled(motion.div)``;

type TProps = { children: TChildren };
export const Page: FC<TProps> = ({ children }) => {
  useStyles();
  return (
    <Root
      className="flex flex-col items-center pt-20 bg-black"
      style={{ ...SIZE }}
    >
      {children}
    </Root>
  );
};
