import type { ChangeEvent } from "react";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import type { ClassValue } from "clsx";
import clsx from "clsx";
import type { XL_H, LG_H, MD_H } from "@moth-constants/styles";
import {
  XXL_H,
  INSET_BOX_INPUT_CLASS,
} from "@moth-constants/styles";
import {
  TEXT_SIZE_FROM_H,
  clearNativeCss,
} from "@moth-constants/styles/inputs";
import { CaretDown } from "@moth-components/icons/CaretDown";

const parseOptions = <T extends string>(
  option: T | [T, string],
): [T, string] => {
  if (Array.isArray(option) && option.length === 2) {
    return option;
  } else {
    return [option, option];
  }
};

const Root = styled(motion.div)``;
const _Select = styled(motion.select)`
  ${clearNativeCss}
`;
const Option = styled(motion.option)``;
const Icon = styled(motion.div)``;

export type TSelectProps<T> = HTMLMotionProps<"select"> & {
  name: string;
  title?: string;
  header?: string;
  classValue?: ClassValue;
  inputClassValue?: ClassValue;
  options: readonly T[] | T[] | [T, string][];
  value?: string;
  height?:
    | typeof XXL_H
    | typeof XL_H
    | typeof LG_H
    | typeof MD_H;
  onChange(event: ChangeEvent<HTMLSelectElement>): void;
};
export const Select = <T extends string>({
  name,
  title,
  header,
  options,
  value,
  classValue,
  inputClassValue,
  height = XXL_H,
  onChange,
  ...props
}: TSelectProps<T>) => (
  <Root
    className={clsx(
      "relative w-full",
      height,
      classValue ?? "bg-black-light",
    )}
    title={title}
  >
    <_Select
      className={clsx(
        INSET_BOX_INPUT_CLASS,
        inputClassValue ?? TEXT_SIZE_FROM_H[height],
      )}
      name={name}
      value={value}
      onChange={onChange}
      {...props}
    >
      {options
        .map(parseOptions)
        .map(([value, name]: [string, string]) => (
          <Option
            key={value}
            value={value}
            className="text-left"
          >
            {name}
          </Option>
        ))}
    </_Select>
    <Icon
      className="absolute top-1/2 right-1.5 pointer-events-none"
      style={{ y: "-50%" }}
    >
      <CaretDown />
    </Icon>
    {header && (
      <div className="absolute right-1 top-0 text-purple-04 pointer-events-none">
        {header}
      </div>
    )}
  </Root>
);
