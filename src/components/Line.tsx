import styled from "@emotion/styled";
import clsx from "clsx";
import type { FC } from "react";

const Root = styled.hr``;
type TProps = {
  position?: "fixed" | "absolute" | "relative";
  height?: number | string;
};
export const Line: FC<TProps> = ({
  position = "relative",
  height = 6,
}) => (
  <div/>
  // <Root
  //   className={clsx(
  //     `flex ${position} left-0 top-0 w-full h-${height}`,
  //   )}
  //   style={{
  //     backgroundColor: "rgba(28, 28, 28, 0.4)",
  //   }}
  // />
);
