import { FilterWithLine } from "@components/effects/glitch/FilterWithLine";
import { GLITCH_WITH_LINE_ID } from "@components/effects/glitch/config";
import styled from "@emotion/styled";
const Root = styled.div``;
export const Glitch = () => (
  <Root className="relative w-screen h-screen">
    <div className="py-2">
      <h2 className="text-center">Glitch</h2>
    </div>
    <svg width="100%" height="100%" viewBox="0 0 100 100">
      <FilterWithLine />
      <image
        x="0"
        y="0"
        className="w-full h-full"
        xlinkHref="/synthwave.jpg"
        style={{ filter: `url(#${GLITCH_WITH_LINE_ID})` }}
      />
    </svg>
  </Root>
);
