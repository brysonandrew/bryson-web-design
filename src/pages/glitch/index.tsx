import styled from "@emotion/styled";
import { Glitch as GlitchFilter } from "@components/effects/glitch";
import { GLITCH_FILTER_ID } from "@components/effects/glitch/config";

const Root = styled.div``;

export const Glitch = () => (
  <Root className="relative w-screen h-screen">
    <div className="py-2">
      <h2 className="text-center">Glitch</h2>
    </div>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
    >
      <GlitchFilter />
      <image
        x="0%"
        y="0%"
        width="100%"
        height="100%"
        xlinkHref="/synthwave.jpg"
        // xlinkHref="/mugshot2.png"

        filter={`url(#${GLITCH_FILTER_ID})`}
      />
    </svg>
  </Root>
);
