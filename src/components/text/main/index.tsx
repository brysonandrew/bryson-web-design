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

const Root = styled(motion.div)``;

export const Main: FC = () => {
  const { pathname } = useLocation();
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 100], [0, -28]);
  const scale = useTransform(scrollY, [0, 100], [1, 0.7]);

  return (
    <Root
      className="flex relative grow z-10 top-0.5"
      style={{ scale, x, originY: "100%" }}
    >
      {pathname === "/" ? <Title /> : <Link />}
    </Root>
  );
};
