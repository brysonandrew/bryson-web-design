import type { FC } from "react";
import { Intro as _Intro } from "@components/text/Intro";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { TextXl } from "@components/text/TextXl";
import { STORY } from "@constants/copy";

const Root = styled(motion.div)``;

export const Text: FC = () => (
  <Root className="flex flex-col items-center">
    <TextXl>{STORY.intro}</TextXl>
  </Root>
);
