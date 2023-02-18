import type { FC } from "react";
import type { MotionValue } from "framer-motion";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { Typewriter } from "@components/typewriter";
import { GLITCH_ID } from "@components/effects/glitch/config";

const Root = styled(motion.div)``;

type TProps = {
  scale: MotionValue<number>;
};
export const Text: FC<TProps> = ({ scale }) => (
  <Root
    className="absolute top-6 left-4 bg-black-dark w-full z-20"
    style={{ scale, filter: `url(#${GLITCH_ID})` }}
  >
    <div className="absolute top-1.5 left-4 w-5/12 h-1/2">
      <div
        className="relative text-lg pl-4 pr-2 pt-2 pb-3 w-full rounded-xs text-teal-bright bg-black-05"
        style={{ lineHeight: 2, letterSpacing: 2 }}
      >
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
