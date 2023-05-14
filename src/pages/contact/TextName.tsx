import { GlitchPorsalin } from "@components/text/main/glitch-porsalin";
import styled from "@emotion/styled";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import type { FC } from "react";
import { Name } from "./Name";

const Root = styled(motion.div)``;

type TProps = HTMLMotionProps<"input"> & {
  title: string;
  isFocused: boolean;
  offset?: number;
};
export const TextName: FC<TProps> = ({
  title,
  isFocused,
  offset = 0.4,
  ...props
}) => {
  const isValue = Boolean(props.value);

  return (
    <Root
      initial={false}
      animate={
        isFocused ? "focus" : isValue ? "value" : "idle"
      }
    >
      {isFocused ? (
        <GlitchPorsalin offset={0.4}>
          {title}
        </GlitchPorsalin>
      ) : (
        <Name>{title}</Name>
      )}
    </Root>
  );
};
