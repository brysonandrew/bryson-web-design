import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Right } from "./right";
import { Left } from "./left";
import { Middle } from "./middle";

const Root = styled(motion.header)``;

export const Header = () => (
  <Root className="fixed top-0 left-0 w-full">
    <Left />
    <Middle />
    <Right />
  </Root>
);
