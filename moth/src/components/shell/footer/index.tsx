import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Root = styled(motion.footer)``;

export const Footer = () => (
  <Root className="flex items-center justify-between fixed bottom-0 left-0 w-full z-40"></Root>
);
