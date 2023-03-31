import styled from "@emotion/styled";
import clsx from "clsx";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import type { FC} from "react";
import { useEffect } from "react";
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
  const handleFocusSound = useFocusSound();
  const isValue = Boolean(props.value);

  return (
    <Root
      className={clsx(LABEL_CLASS)}
      initial={false}
      animate={
        isFocused ? "focus" : isValue ? "value" : "animate"
      }
    >
      <div className="flex items-start">
        <div className={INPUT_LABEL_CLASS}>
          <Name>{title}</Name>
        </div>
        <Input
          {...props}
          autoComplete="off"
          onFocus={handleFocusSound}
        />
      </div>
      <Gradient />
    </Root>
  );
};
