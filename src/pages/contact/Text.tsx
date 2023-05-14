import styled from "@emotion/styled";
import clsx from "clsx";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import type { FC } from "react";
import { Gradient } from "./Gradient";
import { TextName } from "./TextName";
import { LABEL_CLASS } from "./config";

const Root = styled(motion.label)``;
const Input = styled(motion.input)``;

type TProps = HTMLMotionProps<"input"> & {
  title: string;
  isFocused: boolean;
};
export const Text: FC<TProps> = ({
  title,
  isFocused,
  ...props
}) => {
  return (
    <Root className={clsx(LABEL_CLASS)}>
      <div className="flex items-center">
        <TextName title={title} isFocused={isFocused} />
        <Input {...props} type="text" autoComplete="off" />
      </div>
      <Gradient />
    </Root>
  );
};
