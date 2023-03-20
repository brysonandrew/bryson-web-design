import styled from "@emotion/styled";
import { motion } from "framer-motion";
import type { FC } from "react";

const H1 = styled(motion.h1)``;

export const Title: FC = () => {
  const linkText = "brysona.dev";

  return (
    <H1
      className="text-teal-bright text-xl uppercase leading-none"
      style={{ letterSpacing: 2 }}
    >
      {linkText}
    </H1>
  );
};
