import styled from "@emotion/styled";
import { Lighting as LightingFilter } from "@components/effects/lighting";

const Root = styled.div``;

export const Lighting = () => (
  <Root className="relative w-screen h-screen">
    <div className="py-2">
      <h2 className="text-center">Lighting</h2>
    </div>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
    >
      <LightingFilter
        external={(filterId) => (
          <image
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            xlinkHref="/synthwave.jpg"
            //xlinkHref="/mugshot2.png"
            filter={`url(#${filterId})`}
          />
        )}
      />
    </svg>
  </Root>
);
