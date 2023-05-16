import styled from "@emotion/styled";
import { metalRhondaCss } from "@styles/metal";
import clsx, { ClassValue } from "clsx";
import type { FC } from "react";
export const LINE_COLOR_STYLE = "bg-white-01";

const Root = styled.hr`
  ${metalRhondaCss}
`;

type TProps = {
  classValue?: ClassValue;
  inset: number;
};
export const Center: FC<TProps> = ({
  classValue,
  inset,
}) => {
  const insetCss = `${inset < 0 ? "-" : ""}inset-${
    inset < 0 ? inset * -1 : inset
  }`;
  return (
    <Root
      className={clsx(`absolute`, classValue, insetCss)}
    />
  );
};
