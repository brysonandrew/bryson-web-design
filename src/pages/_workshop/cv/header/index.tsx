import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Contact } from "./Contact";
import { Title } from "./Title";

const Root = styled(motion.header)``;

export const Header = () => (
  <Root className="flex items-center justify-between w-full">
    <Title />
    <Contact />
  </Root>
);
