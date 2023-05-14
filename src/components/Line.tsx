import styled from "@emotion/styled";
import clsx from "clsx";
import type { FC } from "react";

export const LINE_COLOR_STYLE = "bg-white-01";

const Root = styled.hr``;
type TProps = {
  position?: "fixed" | "absolute" | "relative";
  height?: number | string;
};
export const Line: FC<TProps> = ({
  position = "absolute",
  height = 12,
}) => (
  <Root
    className={clsx(
      `flex ${position} left-0 top-0 w-full h-${height}`,
    )}
    style={{
      backgroundColor: "rgba(28, 28, 28, 0.4)",
    }}
  />
);
