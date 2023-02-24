import styled from "@emotion/styled";
import { Content } from "./content";

const Root = styled.div`
  max-width: 600px;
`;

export const Hello = () => (
  <Root className="relative w-full">
    <div className="py-6" />
    <div className="fixed w-full top-24 -translate-x-1/2">
      <Content />
    </div>
  </Root>
);
