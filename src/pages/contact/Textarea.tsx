import styled from "@emotion/styled";
import clsx from "clsx";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import type { FC } from "react";
import { Gradient } from "./Gradient";
import { Name } from "./Name";
import { INPUT_LABEL_CLASS, LABEL_CLASS } from "./config";
import { useFocusSound } from "@hooks/sounds/useFocusSound";

const Root = styled(motion.label)``;
const Input = styled(motion.textarea)``;

type TProps = HTMLMotionProps<"textarea"> & {
  title: string;
  isFocused: boolean;
};
export const Textarea: FC<TProps> = ({
  title,
  isFocused,
  ...props
}) => {
  const isValue = Boolean(props.value);

  return (
    <Root className={clsx(LABEL_CLASS)}>
      <div className="flex items-start">
        <motion.div
          className={INPUT_LABEL_CLASS}
          initial={false}
          animate={
            isFocused ? "focus" : isValue ? "value" : "idle"
          }
        >
          <Name>{title}</Name>
        </motion.div>
        <Input
          {...props}
          autoComplete="off"
        />
      </div>
      <Gradient />
    </Root>
  );
};
