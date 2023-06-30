import styled from "@emotion/styled";
import {
  Glitch as GlitchFilter,
  ID,
} from "@components/effects/glitch";
import { Title } from "@components/text/_Title";
import { resolveUrlId } from "@utils/resolveUrlId";

const Root = styled.div``;

export const Glitch = () => (
  <Root className="relative w-screen h-screen">
    <Title>Glitch</Title>
    <svg width="0" height="0">
      <GlitchFilter />
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
        xlinkHref="/synthwave.jpg"
        //xlinkHref="/mugshot2.png"
        filter={resolveUrlId(ID)}
      />
    </svg>
  </Root>
);
