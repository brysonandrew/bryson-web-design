import styled from "@emotion/styled";
import { Content } from "./content";

const Root = styled.div`
  max-width: 100%;
`;

export const Hello = () => (
  <Root className="relative w-full">
    <div className="py-4" />
    <div className="flex justify-center items-center absolute top-30 w-full">
      <Content />
    </div>
  </Root>
);
