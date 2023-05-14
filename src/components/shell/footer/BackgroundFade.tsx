import styled from "@emotion/styled";
import { motion } from "framer-motion";

const FINAL_HEADER_HEIGHT = 60;

const Root = styled(motion.div)``;

export const BackgroundFade = () => {
  return (
    <Root
      style={{
        height: FINAL_HEADER_HEIGHT * 2,
      }}
      className="absolute bottom-0 left-0 right-0 w-full bg-gradient-to-t from-black-dark pointer-events-none"
    />
  );
};
