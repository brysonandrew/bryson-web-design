import styled from "@emotion/styled";
import { useStyles } from "@css/useStyles";
import { motion } from "framer-motion";
import { Pattern } from "./Pattern";
import { Filters } from "@components/Filters";
import { Processor } from "@components/icons/Processor";

const Root = styled(motion.div)``;

export const Background = () => {
  useStyles();
  return (
    <Root className="w-screen h-screen">
      <Filters />
      <Pattern />
    </Root>
  );
};
