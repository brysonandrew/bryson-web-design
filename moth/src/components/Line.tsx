import styled from "@emotion/styled";
import type { FC } from "react";

const Root = styled.div``;
const Content = styled.hr``;

export const Line: FC = () => (
  <Root className="border w-full opacity-10">
    <Content />
  </Root>
);
