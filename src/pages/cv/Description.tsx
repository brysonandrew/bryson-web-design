import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Root = styled(motion.div)``;

const TEXT_CLASS = "text-md";
const Text = styled(motion.p)``;

export const Description = () => (
  <Root className="flex flex-col items-center justify-center">
    <Text className={TEXT_CLASS}>
      Working on the web for 6 years. Completed 20+ projects
      with React and Typescript.
    </Text>
  </Root>
);
 