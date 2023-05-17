import { STORY } from "@constants/copy";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import type { FC } from "react";
import { Title } from "../Title";
import { Blinder } from "./Blinder";
import { Images } from "./images";
import { Line } from "./Line";

const Root = styled(motion.div)``;

export const Build: FC = () => (
  <Root className="flex flex-col items-center">
    <Title>{STORY.build}</Title>
    <motion.div
      className="relative w-full overflow-hidden"
      style={{ height: 200 }}
      whileHover="hover"
    >
      <Images />
      <Blinder />
      <Line />
    </motion.div>
  </Root>
);
