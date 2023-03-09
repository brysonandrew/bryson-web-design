import styled from "@emotion/styled";
import {
  ShadowText as ShadowTextFilter,
  ID,
} from "@components/effects/shadow-text";

const Root = styled.div``;

export const ShadowText = () => (
  <Root className="relative w-screen h-screen">
    <div className="py-2">
      <h2 className="text-center">Phase</h2>
    </div>
    <svg width="0%" height="0%">
      <ShadowTextFilter />
      <text filter={`url(#${ID})`}>hello hello</text>
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
        xlinkHref="/mugshot2.png"
        filter={`url(#${ID})`}
      />
    </svg>
  </Root>
);
