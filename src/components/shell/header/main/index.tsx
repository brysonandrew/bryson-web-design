import styled from "@emotion/styled";
import { useHome } from "@hooks/useHome";
import { motion } from "framer-motion";
import type { FC } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "./Link";
import { Title } from "./Title";

const Root = styled(motion.div)``;

export const Main: FC = () => {
  const { pathname } = useLocation();
  const handleTap = useHome();

  return (
    <Root
      className="relative flex flex-col relative grow"
      onTap={handleTap}
    >
      <>{pathname === "/" ? <Title /> : <Link />}</>
    </Root>
  );
};
