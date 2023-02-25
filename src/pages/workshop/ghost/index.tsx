import { Title } from "@components/text/Title";
import styled from "@emotion/styled";
import { Defs } from "./defs";
import { FILTER_ID } from "./constants";
import { resolveUrlId } from "@utils/resolveUrlId";

const Root = styled.div``;

export const Ghost = () => (
  <Root className="relative">
    <Title>Ghost</Title>
    <svg
      className="container"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 800 400"
    >
      <Defs />
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
        filter={resolveUrlId(FILTER_ID)}
      />
    </svg>
  </Root>
);
