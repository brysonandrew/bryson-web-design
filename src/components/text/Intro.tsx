import type { ClassValue } from "clsx";
import clsx from "clsx";
import type { HTMLMotionProps } from "framer-motion";
import type { FC } from "react";
import { Text } from "./Text";

type TProps = HTMLMotionProps<"h5"> & {
  classValue?: ClassValue;
};
export const Intro: FC<TProps> = ({
  classValue,
  children,
  ...props
}) => (
  <Text
    classValue={clsx(classValue)}
    {...props}
  >
    {children}
  </Text>
);
