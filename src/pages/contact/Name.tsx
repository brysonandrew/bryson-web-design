import styled from "@emotion/styled";
import { TChildren } from "@t/index";
import { motion } from "framer-motion";
import type { FC } from "react";
import { textShadow } from "./config";
import COLORS from "@windi/config-colors.json";

const Root = styled(motion.h4)``;

type TProps = {
  children: TChildren;
};
export const Name: FC<TProps> = ({ children }) => {
  return (
    <Root
      className="whitespace-nowrap"
      variants={{
        animate: {
          textShadow: textShadow.off,
          color: COLORS["teal"],
        },
        focus: {
          textShadow: textShadow.on,
          color: COLORS["teal-08"],
        },
        value: {
          color: COLORS["teal-04"],
          textShadow: textShadow.off,
        },
      }}
    >
      {children}
    </Root>
  );
};
