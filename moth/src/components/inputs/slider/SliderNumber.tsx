import { memo, useEffect, useRef, useState } from "react";
import type { ChangeEvent, FC } from "react";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import clsx from "clsx";
import { Slider as _Slider } from "@moth-components/inputs";
import { Number } from "@moth-components/inputs/number";
import { MD_H, MOTION_CENTER_STYLE } from "@moth-constants/styles";

const Root = styled(motion.li)``;
const Label = styled(motion.div)``;

type TProps = HTMLMotionProps<"input"> & {
  name: string;
  initValue?: number;
  onDebounceChange(next: number): void;
};
export const SliderNumber: FC<TProps> = memo(
  ({ name, initValue, onDebounceChange, ...props }) => {
    const timoutRef = useRef<null | ReturnType<
      typeof setTimeout
    >>(null);
    const [value, setValue] = useState(initValue);

    const handleClearTimeout = () => {
      if (timoutRef.current) {
        clearTimeout(timoutRef.current);
      }
    };
    useEffect(() => handleClearTimeout, []);

    const handleChange = (
      event: ChangeEvent<HTMLInputElement>
    ) => {
      const {
        currentTarget: { value },
      } = event;
      const next = parseFloat(value);
      setValue(next);
      handleClearTimeout();
      timoutRef.current = setTimeout(() => {
        onDebounceChange(next);
      }, 100);
    };

    return (
      <Root
        className={clsx(
          "relative flex items-center w-full bg-purple-005 shadow-purple-04-sm",
          MD_H
        )}
      >
        <Label
          className="absolute top-1/2 left-1/2 text-xs text-gray-lightest uppercase tracking-widest "
          style={MOTION_CENTER_STYLE}
        >
          {name}
        </Label>
        <_Slider
          classValue="grow"
          name={name}
          value={value}
          onChange={handleChange}
          {...props}
        />
        <div className="mx-0.5 h-full grow w-px bg-purple-04" />
        <Number
          name={name}
          title={name}
          value={value}
          inputClassValue="pt-0.75"
          onChange={handleChange}
          {...props}
        />
      </Root>
    );
  }
);
