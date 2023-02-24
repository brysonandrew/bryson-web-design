import { Border as Select } from "@components/select/Border";
import styled from "@emotion/styled";
import { useSelectHandlers } from "@hooks/useSelectHandlers";
import { ELEVATED } from "@styles/neu";
import clsx from "clsx";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import type { FC } from "react";
import { LABEL_CLASS, textShadow } from "./config";
import { Gradient } from "./Gradient";

const Root = styled(motion.label)``;
const Input = styled(motion.textarea)``;

const Name = styled(motion.h4)``;

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

  return (
    <Root
      className={clsx(LABEL_CLASS, ELEVATED)}
      initial={false}
      animate={isFocused ? "focus" : "animate"}
      {...handlers}
    >
      {isSelected && (
        <Select classValue="shadow-teal-fade-sm" />
      )}
      <div className="flex items-start">
        <Name
          className="whitespace-nowrap text-teal"
          variants={{
            animate: {
              textShadow: textShadow.off,
            },
            focus: {
              textShadow: textShadow.on,
            },
          }}
        >
          {title}
        </Name>
        <div className="p-1.5" />
        <Input {...props} autoComplete="off" />
      </div>
      <Gradient />
    </Root>
  );
};
