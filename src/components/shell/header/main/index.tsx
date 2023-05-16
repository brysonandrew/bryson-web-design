import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import type { FC } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "./Link";
import styled from "@emotion/styled";
import { Title } from "./Title";
import { useHome } from "@hooks/useHome";

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
