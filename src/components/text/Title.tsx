import type { FC } from "react";
import type { MotionValue } from "framer-motion";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import React from "react";
import { Typewriter } from "../typewriter";

const Root = styled(motion.h1)``;

type TProps = {
  scale: MotionValue<number> | number;
  x: MotionValue<number> | number;
};
export const Title: FC<TProps> = ({ scale, x }) => (
  <Root
    className="relative z-10 grow-0 text-xl uppercase leading-none"
    style={{ scale, x }}
  >
    <Typewriter wip="brysona.dev">
      {(content) => <>{content}</>}
    </Typewriter>
  </Root>
);
