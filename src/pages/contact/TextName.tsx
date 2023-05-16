import { GlitchPorsalin } from "@components/text/glitch-porsalin";
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
  offset = 0.2,
  ...props
}) => {
  const isValue = Boolean(props.value);

  return (
    <Root
      className="pl-4"
      initial={false}
      animate={
        isFocused ? "focus" : isValue ? "value" : "idle"
      }
    >
      {isFocused ? (
        <GlitchPorsalin offset={0.16}>
          {title}
        </GlitchPorsalin>
      ) : (
        <Name>{title}</Name>
      )}
    </Root>
  );
};
