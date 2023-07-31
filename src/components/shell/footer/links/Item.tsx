import styled from "@emotion/styled";
import type { FC } from "react";

const Root = styled.li``;

type TProps = {
  children: JSX.Element;
};
export const Item: FC<TProps> = ({ children }) => (
  <Root className="inline-flex items-center justify-center relative w-10 h-10 rounded-full mt-1 mr-1">
    {children}
  </Root>
);
