import type { MotionValue } from "framer-motion";
import { motion } from "framer-motion";
import type { FC } from "react";
import { useLocation } from "react-router-dom";
import { Title } from "./Title";
import { Link } from "./Link";
import styled from "@emotion/styled";

const Root = styled(motion.div)``;

type TProps = {
  scale: MotionValue<number> | number;
  x: MotionValue<number> | number;
};
export const Main: FC<TProps> = ({ scale, x }) => {
  const { pathname } = useLocation();

  return (
    <Root
      className="flex relative grow-0 z-10 top-0.5"
      style={{ scale, x }}
    >
      {pathname === "/" ? (
        <div className="flex relative px-3 pt-2 pb-3">
          <Title />
        </div>
      ) : (
        <Link />
      )}
    </Root>
  );
};
