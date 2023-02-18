import { FC } from "react";
import { MotionValue, motion } from "framer-motion";
import styled from "@emotion/styled";
import { Typewriter } from "@components/typewriter";

const Root = styled(motion.h1)``;

type TProps = {
  scale: MotionValue<number> | number;
  x: MotionValue<number> | number;
};
export const Title: FC<TProps> = ({ scale, x }) => {
  return (
    <Root
      className="relative z-10 grow-0 text-xl uppercase leading-none"
      style={{ scale, x }}
    >
      <Typewriter wip="brysona.dev">
        {(content) => <>{content}</>}
      </Typewriter>
    </Root>
  );
};
