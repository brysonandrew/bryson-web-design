import type { FC } from "react";
import { Text } from "@components/text/Text";
import { Intro as _Intro } from "@components/text/Intro";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Root = styled(motion.div)``;

export const Intro: FC = () => (
  <Root>
    <Text classValue="px-4">👋 Hi, my name is Andrew</Text>
    <div className="p-1.5" />
    <_Intro>and I use</_Intro>
  </Root>
);
