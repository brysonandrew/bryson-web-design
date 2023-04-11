import type { FC, InputHTMLAttributes } from "react";
import type { MotionProps } from "framer-motion";
import styled from "@emotion/styled";
import type { TChildren } from "@t/index";
import type { ClassValue } from "clsx";
import clsx from "clsx";
import { Tick } from "@moth-components/icons/Tick";
import { CENTER, LG } from "@moth-constants/styles";

const Root = styled.label``;
const Input = styled.input``;

export type TPassedNumberProps = Pick<
  TCheckboxProps,
  "onChange"
>;

export type TCheckboxAttributes =
  InputHTMLAttributes<HTMLInputElement> & MotionProps;
export type TCheckboxProps = TCheckboxAttributes & {
  classValue?: ClassValue;
  inputClassValue?: ClassValue;
  name: string;
  title?: string;
  inactive?: boolean;
  header?: TChildren;
};
export const Checkbox: FC<TCheckboxProps> = ({
  name,
  value,
  title,
  header,
  classValue,
  inactive,
  inputClassValue,
  onChange,
  ...props
}) => (
  <Root
    {...(title ? { title } : {})}
    className={clsx(
      "relative text-xs cursor-pointer shadow-current-sm",
      [props.checked ? "brightness-100" : "brightness-50"],
      CENTER,
      classValue ?? LG,
      [inactive && "opacity-50"],
    )}
  >
    <Tick isChecked={Boolean(props.checked)} />
    <Input
      name={name}
      className={clsx(
        "w-full text-center p-1 hidden",
        inputClassValue ?? "text-white-dark",
      )}
      value={value}
      type="checkbox"
      onChange={onChange}
      {...props}
    />
    {header && (
      <div className="absolute right-1 top-0 text-purple-04 pointer-events-none">
        {header}
      </div>
    )}
  </Root>
);
