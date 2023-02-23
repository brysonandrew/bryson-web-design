import styled from "@emotion/styled";
import { EDGES_ID } from "@components/effects/edges";
import { Filter as EdgesFilter } from "@components/effects/edges/Filter";
const Root = styled.div``;

export const Edges = () => (
  <Root className="relative w-screen h-screen">
    <div className="py-2">
      <h2 className="text-center">Edges</h2>
    </div>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
    >
      <EdgesFilter />
      <image 
        x="0%"
        y="0%"
        width="100%"
        height="100%"
        xlinkHref="/synthwave.jpg"
        //xlinkHref="/mugshot2.png"
        filter={`url(#${EDGES_ID})`}
      />
    </svg>
  </Root>
);
