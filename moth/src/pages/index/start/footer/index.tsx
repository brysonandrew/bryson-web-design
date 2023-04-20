import styled from "@emotion/styled";
import { Sound } from "./Sound";

const Root = styled.footer``;

export const Footer = () => (
    <Root className="flex justify-between fixed left-2 bottom-2 w-full px-4">
      <div />
      <Sound />
    </Root>
  );
