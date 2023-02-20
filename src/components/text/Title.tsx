import type { FC } from "react";
import type { MotionValue } from "framer-motion";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { Typewriter } from "../typewriter";
import { useResetScroll } from "@hooks/useResetScroll";

const Root = styled(motion.div)``;
const H1 = styled(motion.h1)``;

type TProps = {
  scale: MotionValue<number> | number;
  x: MotionValue<number> | number;
};
export const Title: FC<TProps> = ({ scale, x }) => {
  const handleResetScroll = useResetScroll();
  return (
    <Root
      className="relative grow-0 z-10"
      style={{ scale, x }}
      onTap={handleResetScroll}
    >
      <Link to="/">
        <Typewriter delay={100} wip="brysona.dev">
          {(content) => (
            <H1 className="text-xl uppercase leading-none">
              {content}
            </H1>
          )}
        </Typewriter>
      </Link>
    </Root>
  );
};
