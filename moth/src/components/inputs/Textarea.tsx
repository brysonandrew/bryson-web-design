import type { FC, InputHTMLAttributes } from "react";
import type { MotionProps } from "framer-motion";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import type { TChildren } from "@t/index";
import type { ClassValue } from "clsx";
import clsx from "clsx";

const Input = styled(motion.textarea)``;

export type TPassedNumberProps = Pick<
  TNumberProps,
  "onChange"
>;

export type TNumberAttributes =
  InputHTMLAttributes<HTMLTextAreaElement> & MotionProps;
export type TNumberProps = TNumberAttributes & {
  classValue?: ClassValue;
  inputClassValue?: ClassValue;
  name: string;
  header?: TChildren;
};
export const Textarea: FC<TNumberProps> = ({
  name,
  value,
  header,
  classValue,
  inputClassValue,
  onChange,
  ...props
}) => (
  <div
    className={clsx(
      "relative",
      classValue ?? "w-12 text-xs"
    )}
  >
    <Input
      name={name}
      className={clsx(
        "flex w-full h-full disabled:brightness-50",
        inputClassValue ?? "text-white-dark text-center"
      )}
      value={value}
      type="text"
      onChange={onChange}
      {...props}
    />
    {header && (
      <div className="absolute right-1 top-0 pointer-events-none">
        {header}
      </div>
    )}
  </div>
);
