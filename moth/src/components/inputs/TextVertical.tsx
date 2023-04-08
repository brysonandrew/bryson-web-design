import type {
  FC,
  InputHTMLAttributes,
} from "react";
import type { MotionProps } from "framer-motion";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import type { TChildren } from "@t/index";
import type { ClassValue } from "clsx";
import clsx from "clsx";

const Input = styled(motion.input)``;

export type TPassedNumberProps = Pick<
  TNumberProps,
  "onChange"
>;

export type TNumberAttributes =
  InputHTMLAttributes<HTMLInputElement> & MotionProps;
export type TNumberProps = TNumberAttributes & {
  classValue?: ClassValue;
  inputClassValue?: ClassValue;
  name: string;
  header?: TChildren;
};
export const TextVertical: FC<TNumberProps> = ({
  name,
  value,
  header,
  classValue,
  inputClassValue,
  onChange,
  ...props
}) => (
  <label
    className={clsx(
      "relative",
      classValue ?? "w-12 text-xs shadow-purple-04-sm"
    )}
  >
    <Input
      name={name}
      className={clsx(
        "w-full",
        inputClassValue ?? "text-white-dark text-center"
      )}
      value={value}
      type="text"
      onChange={onChange}
      {...props}
    />
    {header && (
      <div className="absolute left-1 bottom-full text-xs pointer-events-none p-1">
        {header}
      </div>
    )}
  </label>
);
