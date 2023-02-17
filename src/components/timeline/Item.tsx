import styled from "@emotion/styled";
import type { FC } from "react";

const Root = styled.li``;

type TProps = {
  children: JSX.Element;
};
export const Item: FC<TProps> = ({ children }) => (
  <Root className="p-2 --panel rounded-md">
    {children}
  </Root>
);
