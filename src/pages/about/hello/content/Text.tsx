import { Typewriter } from "@components/typewriter";
import styled from "@emotion/styled";
import clsx from "clsx";
import type { MotionStyle } from "framer-motion";
import { motion } from "framer-motion";
import type { FC } from "react";

const Root = styled(motion.div)``;

type TProps = MotionStyle;
export const Text: FC<TProps> = (style) => (
  <Root
    className="absolute top-5 left-5 w-full z-20"
    style={style}
  >
    <div className="absolute w-5/12 h-1/2">
      <div
        className="relative text-xs mt-4 md:mt-0 md:text-lg w-full rounded-xs text-teal-bright w-60"
        style={{ lineHeight: 2.025, letterSpacing: 2 }}
      >
        <Typewriter
          delay={600}
          wip="Hi, my name is Andrew and I make websites and
            web applications"
        >
          {(content) => (
            <div className={clsx("pl-4 pr-2 pt-5 pb-3")}>
              {content}
            </div>
          )}
        </Typewriter>
      </div>
    </div>
  </Root>
);
