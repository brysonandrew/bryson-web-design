import styled from "@emotion/styled";
import clsx from "clsx";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import type { FC } from "react";
import { Gradient } from "./Gradient";
import { TextName } from "./TextName";
import { LABEL_CLASS } from "./config";
import { Fill } from "@components/metal/Fill";

const Root = styled(motion.label)``;
const Input = styled(motion.textarea)`
  background-color: transparent;
`;

type TProps = HTMLMotionProps<"textarea"> & {
  title: string;
  isFocused: boolean;
};
export const Textarea: FC<TProps> = ({
  title,
  isFocused,
  ...props
}) => (
  <Root className={clsx(LABEL_CLASS)}>
    <Fill />
    <div
      className={clsx(
        "pt-1.5",
        "relative flex items-start",
        "bg-black-dark",
      )}
    >
      <div className={clsx([isFocused && "pt-1"])}>
        <TextName
          title={title}
          isFocused={isFocused}
          offset={0.2}
        />
      </div>
      <Input {...props} autoComplete="off" />
    </div>
    <Gradient />
  </Root>
);
