import type { FC } from "react";
import { cx } from 'class-variance-authority';
import { TLinesOptions } from "@brysonandrew/layout-lines/types";
import { Lines_Line } from "@brysonandrew/layout-lines/_line";
type TProps = TLinesOptions;
export const LinesHorizontalLight: FC<
  TProps
> = ({ classValue, ...props }) => {
  return (
    <Lines_Line
      classValue={cx(
        "w-full h-0",
        classValue
      )}
      sizeClass="border-t"
      colorClass="border-gray-8"
      {...props}
    />
  );
};
