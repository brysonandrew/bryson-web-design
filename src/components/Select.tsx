import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { SELECT_LAYOUT_ID } from "./cursor/config";

const Root = styled(motion.div)``;

export const Select = () => (
  <Root
    layoutId={SELECT_LAYOUT_ID}
    className="absolute inset-0 shadow-teal-sm pointer-events-none"
  />
);
