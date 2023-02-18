import { FC } from "react";
import { MotionValue, motion } from "framer-motion";
import styled from "@emotion/styled";
import { Typewriter } from "@components/typewriter";

const Root = styled(motion.div)``;

type TProps = {
  scale: MotionValue<number>;
};
export const Text: FC<TProps> = ({ scale }) => {
  return (
    <Root
      className="absolute top-6 left-0 bg-black-dark w-full z-20"
      style={{ scale }}
    >
      <div className="absolute top-4 left-6 w-5/12 h-1/2">
        <div className="relative pl-4 pr-2 pt-2 pb-3 w-full rounded-xs text-teal-bright bg-black-05">
          <Typewriter
            delay={600}
            wip="Hi, my name is Andrew and I make websites and
            web applications"
          >
            {(content) => <>{content}</>}
          </Typewriter>
        </div>
      </div>
    </Root>
  );
};
