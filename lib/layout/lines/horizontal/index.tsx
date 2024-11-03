import type { FC } from "react";
import { cx } from 'class-variance-authority';
import { TLinesOptions } from "@brysonandrew/layout-lines";
import { Lines_Line } from "@brysonandrew/layout-lines";

type TProps = TLinesOptions;
export const LinesHorizontal: FC<
  TProps
> = ({ classValue, ...props }) => {
  return (
    <Lines_Line
      classValue={cx(
        "h-0",
        classValue
      )}
      sizeClass="border-t"
      {...props}
    />
  );
};
