import styled from "@emotion/styled";
import { metalRadialDarkCss } from "@css/metal";
import clsx from "clsx";
import type { FC } from "react";

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
      "bg-white-01",
    )}
  />
);
