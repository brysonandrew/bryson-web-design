import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { Main } from "@components/text/main";

const Root = styled(motion.header)`
  width: calc(100% - 4rem);
`;

export const Header = () => (
  <Root className="flex items-center fixed w-full px-12 top-0 left-0 pt-4 pb-5 z-40">
    <Main {...{ scale: 0.7, x: -28 }} />
  </Root>
);
