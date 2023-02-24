import styled from "@emotion/styled";
import {
  Displacement,
  ID,
} from "@components/effects/displacement";
import { Filter as EdgesFilter } from "@components/effects/edges/Filter";

const Root = styled.div``;

export const Phase = () => (
  <Root className="relative w-screen h-screen">
    <div className="py-2">
      <h2 className="text-center">Phase</h2>
    </div>
    <svg width="0" height="0">
      <Displacement>
        {(filterId) => (
          <EdgesFilter id={filterId} result="SobelFilter" />
        )}
      </Displacement>
    </svg>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
    >
      <image
        x="0%"
        y="0%"
        width="100%"
        height="100%"
        //xlinkHref="/synthwave.jpg"
        xlinkHref="/mugshot2.png"
        filter={`url(#${ID})`}
      />
    </svg>
  </Root>
);
