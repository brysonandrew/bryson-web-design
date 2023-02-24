import styled from "@emotion/styled";
import { Filter as Displacement } from "@components/effects/displacement/Filter";
import { Filter as EdgesFilter } from "@components/effects/edges/Filter";
const ID = "DisplacementId";
const SIZE = 1000;
const Root = styled.div``;

export const Phase = () => (
  <Root className="relative w-screen h-screen">
    <div className="py-2">
      <h2 className="text-center">Phase</h2>
    </div>
    <svg
      width={SIZE}
      height={SIZE}
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      preserveAspectRatio="xMidYMid slice"
    >
      <image
        x="0"
        y="0"
        width={SIZE}
        height={SIZE}
        //xlinkHref="/synthwave.jpg"
        xlinkHref="/mugshot2.png"
        filter={`url(#${ID})`}
      />
    </svg>
    <svg width="0" height="0">
      <rect
        stroke="red"
        width={SIZE}
        height={SIZE}
        x="0"
        y="0"
        // filter={`url(#${ID})`}
      />
      <Displacement id={ID} source="SourceGraphic">
        {(filterId) => (
          <EdgesFilter id={filterId} result="SobelFilter" />
        )}
      </Displacement>
    </svg>
  </Root>
);
