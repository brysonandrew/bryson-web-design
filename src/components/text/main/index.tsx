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
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 100], [0, -40]);
  const scale = useTransform(scrollY, [0, 100], [1, 0.7]);
  const handleTap = useHome();

  return (
    <Root
      className="flex flex-col relative grow z-10"
      // style={{ scale, x, originY: 0 }}
      onTap={handleTap}
    >
      <>{pathname === "/" ? <Title /> : <Link />}</>
    </Root>
  );
};
