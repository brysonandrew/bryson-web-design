import styled from "@emotion/styled";
import clsx from "clsx";
import type { FC } from "react";

export const LINE_COLOR_STYLE = "bg-white-01";

const Root = styled.hr``;

export const Line: FC = () => (
  <Root
    className={clsx(
      "relative top-12 flex  w-full h-12",
      LINE_COLOR_STYLE,
    )}
  />
);
