import styled from "@emotion/styled";
import clsx from "clsx";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import type { FC } from "react";
import { Gradient } from "./Gradient";
import { TextName } from "./TextName";
import { LABEL_CLASS } from "./config";

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
  return (
    <Root className={clsx(LABEL_CLASS)}>
      <div className="flex items-start">
        <div className={clsx([isFocused && "mt-1"])}>
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
};
