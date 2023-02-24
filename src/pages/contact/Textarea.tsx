import type { FC } from "react";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import clsx from "clsx";
import { ELEVATED } from "@styles/neu";
import { LABEL_CLASS, textShadow } from "./config";
import { MOTION_CONFIG } from "@constants/animation";
import { useSelectHandlers } from "@hooks/useSelectHandlers";
import { Select } from "@components/Select";

const Root = styled(motion.label)``;
const Input = styled(motion.textarea)``;
const Gradient = styled(motion.div)``;

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
      <Gradient
        className="absolute left-0 bottom-0 w-full bg-gradient-to-t from-teal-01 h-1/2 opacity-50"
        variants={{
          animate: { scaleX: 0 },
          focus: { scaleX: 1 },
        }}
        style={{ originX: 0 }}
        transition={{ ...MOTION_CONFIG, duration: 1 }}
      />
    </Root>
  );
};
