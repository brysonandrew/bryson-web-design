import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Pattern } from "./Pattern";
import { Filters } from "@components/Filters";

const Root = styled(motion.div)``;

export const Background = () => {
  return (
    <Root className="w-screen h-screen">
      <Filters />
      <Pattern />
    </Root>
  );
};
