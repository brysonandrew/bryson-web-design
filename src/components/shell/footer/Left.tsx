import { Sub } from "@components/text/Sub";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Root = styled(motion.footer)``;

export const Left = () => (
    <Root className="absolute bottom-4 left-2">
      <Sub classValue="px-3 whitespace"></Sub>
      <div className="py-0.5" />
      <Sub classValue="px-3"></Sub>
    </Root>
  );
