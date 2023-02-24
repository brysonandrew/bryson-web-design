import { MOTION_CONFIG } from "@constants/animation";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import type { FC } from "react";

const Root = styled(motion.div)``;

export const Gradient: FC = () => {
  return (
    <Root
      className="absolute left-0 bottom-0 w-full bg-gradient-to-t from-teal-01 h-1/2 opacity-10"
      variants={{
        animate: { scaleX: 0 },
        focus: { scaleX: 1 },
      }}
      style={{ originX: 0 }}
      transition={{ ...MOTION_CONFIG, duration: 1 }}
    />
  );
};
