import styled from "@emotion/styled";
import { metalRadialDarkCss } from "@styles/metal";
import type { ClassValue } from "clsx";
import clsx from "clsx";
import type { FC } from "react";
import { Center } from "./Center";

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
