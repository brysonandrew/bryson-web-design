import styled from "@emotion/styled";
import { metalRadialDarkCss } from "@styles/metal";
import clsx, { ClassValue } from "clsx";
import type { FC } from "react";
import { Center } from "./Center";
export const LINE_COLOR_STYLE = "bg-white-01";

const Root = styled.div`
  ${metalRadialDarkCss}
`;

type TProps = {
  classValue?: ClassValue;
  inset?: number;
};
export const Fill: FC<TProps> = ({ classValue, inset }) => (
  <Root className={clsx(`absolute inset-0`, classValue)}>
    {typeof inset === "number" ? (
      <Center inset={inset} />
    ) : null}
  </Root>
);
