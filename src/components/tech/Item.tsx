import styled from "@emotion/styled";
import { BUTTON } from "@styles/buttons";
import type { FC } from "react";

const Root = styled.li``;

type TProps = {
  children: JSX.Element;
};
export const Item: FC<TProps> = ({ children }) => (
  <Root className={BUTTON}>
    {children}
  </Root>
);
