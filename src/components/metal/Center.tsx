import styled from "@emotion/styled";
import { metalRhondaCss } from "@css/metal";
import type { ClassValue } from "clsx";
import clsx from "clsx";
import type { FC } from "react";

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
