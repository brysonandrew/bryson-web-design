import styled from "@emotion/styled";
import { Header } from "./Header";
import { Pic } from "./pic-I/Pic";
import { Sub } from "./Sub";

const Root = styled.div`
  max-width: 480px;
`;

const Footer = styled.footer`
  max-width: 480px;
`;

export const Home = () => (
  <Root className="relative w-full">
    <Header />
    <div className="py-4" />
    <Root className="relative">
      <Footer className="fixed w-full top-12 left-1/2 -translate-x-1/2">
        <Sub />
        <Pic />
      </Footer>
    </Root>
  </Root>
);
