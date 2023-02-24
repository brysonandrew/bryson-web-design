import type { FC } from "react";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import clsx from "clsx";
import { ELEVATED } from "@styles/neu";
import { MOTION_CONFIG } from "@constants/animation";
import {
  LABEL_CLASS,
  textShadow,
  INPUT_CLASS,
} from "./config";
import { useSelectHandlers } from "@hooks/useSelectHandlers";
import { Select } from "@components/Select";

const Root = styled(motion.label)``;
const Line = styled(motion.hr)``;
const Input = styled(motion.input)`
  &::-webkit-autofill,
  ::-webkit-autofill:hover,
  ::-webkit-autofill:focus,
  ::-webkit-autofill:active {
    background-color: #111 !important;
  }
  &::-internal-autofill-selected {
    background-color: #111 !important;
  }
`;

const Name = styled(motion.h4)``;

type TProps = HTMLMotionProps<"input"> & {
  title: string;
  isFocused: boolean;
};
export const Text: FC<TProps> = ({
  title,
  isFocused,
  ...props
}) => {
  const { handlers, isSelected } = useSelectHandlers(title);

  return (
    <Root
      className={clsx("pb-2", LABEL_CLASS, ELEVATED)}
      initial={false}
      animate={isFocused ? "focus" : "animate"}
      {...handlers}
    >
      {isSelected && (
        <Select classValue="shadow-teal-bright-fade-sm" />
      )}
      <motion.div className="flex items-center">
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
        <Input
          className={INPUT_CLASS}
          type="text"
          autoComplete="off"
          {...props}
        />
      </motion.div>
      <Line
        className="absolute left-0 top-full w-full h-px bg-teal-04"
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
