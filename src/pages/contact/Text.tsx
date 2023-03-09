import type { FC } from "react";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import styled from "@emotion/styled";
import clsx from "clsx";
import {
  LABEL_CLASS,
  INPUT_CLASS,
  INPUT_LABEL_CLASS,
} from "./config";
import { Gradient } from "./Gradient";
import { Name } from "./Name";

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
  const isValue = Boolean(props.value);
  return (
    <Root
      className={clsx("pb-2", LABEL_CLASS)}
      initial={false}
      animate={
        isFocused ? "focus" : isValue ? "value" : "animate"
      }
    >
      <div className="flex items-center">
        <div className={INPUT_LABEL_CLASS}>
          <Name>{title}</Name>
        </div>
        <Input
          className={INPUT_CLASS}
          type="text"
          autoComplete="off"
          {...props}
        />
      </div>
      <Gradient />
    </Root>
  );
};
