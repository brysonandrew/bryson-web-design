import type { FC } from "react";
import type { HTMLMotionProps} from "framer-motion";
import { motion } from "framer-motion";
import type { TChildren } from "@t/index";
import styled from "@emotion/styled";

const Root = styled(motion.button)``;

type TProps = HTMLMotionProps<"button"> & {
  icon: JSX.Element;
  children: TChildren;
};
export const Button: FC<TProps> = ({
  icon,
  children,
  ...props
}) => (
  <Root className="shadow-red-04-sm" {...props}>
    <div className="flex items-center">
      {icon}
      <div className="p-1" />
      <div>{children}</div>
      <div className="px-3" />
    </div>
  </Root>
);
