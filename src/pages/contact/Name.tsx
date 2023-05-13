import styled from "@emotion/styled";
import type { TChildren } from "@t/index";
import { motion } from "framer-motion";
import type { FC } from "react";
import { textShadow } from "./config";
import COLORS from "@windi/config-colors.json";

const Root = styled(motion.h4)``;

type TProps = {
  children: TChildren;
};
export const Name: FC<TProps> = ({ children }) => (
    <Root
      className="whitespace-nowrap"
      variants={{
        animate: {
          textShadow: textShadow.off,
          color: COLORS["white"],
        },
        focus: {
          textShadow: textShadow.on,
          color: COLORS["red-08"],
        },
        value: {
          color: COLORS["red-04"],
          textShadow: textShadow.off,
        },
      }}
    >
      {children}
    </Root>
  );
