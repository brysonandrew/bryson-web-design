import type { FC } from "react";
import { Text } from "./Text";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Root = styled(motion.div)``;

export const Intro: FC = () => (
  <Root className="">
    <Text classValue="px-4">Hi, my name is Andrew</Text>
    <div className="p-1"/>
    <Text>and I use</Text>
  </Root>
);
