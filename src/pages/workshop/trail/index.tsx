import { Background } from "@components/Background";
import { Cursor } from "@components/cursor";
import styled from "@emotion/styled";

const Root = styled.div``;

export const Trail = () => (
  <Root className="relative w-screen h-screen cursor-none">
    <div className="inline-flex fixed top-0 left-0 py-1 px-2 z-0 bg-black-05">
      <h2 className="text-center">Trail</h2>
    </div>
    <Background/>
    <Cursor />
  </Root>
);
