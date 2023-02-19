import type { FC } from "react";
import { MotionStyle, motion } from "framer-motion";
import styled from "@emotion/styled";
import { Typewriter } from "@components/typewriter";
import { GLITCH_ID } from "@components/effects/glitch/config";
import clsx from "clsx";
import { BACKGROUND_CLASS } from "@styles/backgrounds";
import { TChildrenProps } from "@t/index";

const Root = styled(motion.div)``;

type TProps = MotionStyle;
export const Text: FC<TProps> = (style) => (
  <Root
    className="absolute top-5 left-5 w-full z-20"
    style={{ ...style, filter: `url(#${GLITCH_ID})` }}
  >
    <div className="absolute w-5/12 h-1/2">
      <div
        className="relative text-lg w-full rounded-xs text-teal-bright"
        style={{ lineHeight: 2.025, letterSpacing: 2 }}
      >
        <Typewriter
          Placeholder={({ children }: TChildrenProps) => (
            <motion.div
              key="placeholder"
              className="absolute left-2 top-2 bg-teal-005"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 1 }}
              exit={{ scale: 1, opacity: 0 }}
            >
              {children}
            </motion.div>
          )}
          delay={600}
          wip="Hi, my name is Andrew and I make websites and
            web applications"
        >
          {(content) => (
            <div className={clsx("pl-4 pr-2 pt-2 pb-3")}>
              {content}
            </div>
          )}
        </Typewriter>
      </div>
    </div>
  </Root>
);
