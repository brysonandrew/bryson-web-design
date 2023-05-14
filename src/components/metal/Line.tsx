import styled from "@emotion/styled";
import { metalRadialDarkCss } from "@styles/metal";
import clsx from "clsx";
import type { FC } from "react";
export const LINE_COLOR_STYLE = "bg-white-01";

const Root = styled.hr`
  ${metalRadialDarkCss}
`;
type TProps = {
  size?: number;
};
export const Line: FC<TProps> = ({ size = 20 }) => (
  <Root
    className={clsx(
      `flex absolute -top-${size} w-full h-${size}`,
      LINE_COLOR_STYLE,
    )}
  />
);
