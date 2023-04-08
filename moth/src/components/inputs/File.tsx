import type { FC, InputHTMLAttributes } from "react";
import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion";
import type { ClassValue } from "clsx";
import clsx from "clsx";

export type TFileAttributes =
  InputHTMLAttributes<HTMLInputElement> & MotionProps;
type TFileProps = TFileAttributes & {
  labelClassValue?: ClassValue;
  classValue?: ClassValue;
};
export const File: FC<TFileProps> = ({
  labelClassValue,
  classValue,
  children,
  ...props
}) => (
  <motion.label
    className={clsx(
      "relative cursor-pointer",
      labelClassValue
    )}
  >
    <motion.input
      type="file"
      className={clsx("absolute inset-0", classValue)}
      {...props}
    />
    {children}
  </motion.label>
);
