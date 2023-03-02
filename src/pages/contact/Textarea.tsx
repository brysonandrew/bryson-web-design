import { Border as Select } from "@components/select/Border";
import styled from "@emotion/styled";
import { useSelectHandlers } from "@hooks/useSelectHandlers";
import { ELEVATED } from "@styles/neu";
import clsx from "clsx";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import type { FC } from "react";
import { INPUT_LABEL_CLASS, LABEL_CLASS } from "./config";
import { Gradient } from "./Gradient";
import { Name } from "./Name";

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
  const { handlers, isSelected } = useSelectHandlers(title);
  const isValue = Boolean(props.value);

  return (
    <Root
      className={clsx(LABEL_CLASS)}
      initial={false}
      animate={
        isFocused ? "focus" : isValue ? "value" : "animate"
      }
      {...handlers}
    >
      {/* {isSelected && (
        <Select classValue="shadow-teal-04-sm" />
      )} */}
      <div className="flex items-start">
        <div className={INPUT_LABEL_CLASS}>
          <Name>{title}</Name>
        </div>
        <Input {...props} autoComplete="off" />
      </div>
      <Gradient />
    </Root>
  );
};
