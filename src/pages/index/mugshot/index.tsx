import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { ID } from "@components/effects/displacement";
import { resolveUrlId } from "@utils/resolveUrlId";
import { useDomCondition } from "@hooks/useDomCondition";

export const WIDTH = 280;
export const HEIGHT = 280;

const Root = styled(motion.div)``;
const Svg = styled.svg``;
const Image = styled.image``;

export const Mugshot = () => {
  const isSafari = useDomCondition(
    () =>
      window.navigator.userAgent.includes("Safari") &&
      !window.navigator.userAgent.includes("Chrome"),
  );
  return (
    <Root className="absolute w-64 right-0 top-36 sm:-right-14 md:-right-16 md:w-72 lg:-right-18 lg:top-40 lg:w-80 xl:top-26">
      <Svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        filter={`contrast(180%) opacity(70%) ${
          isSafari ? "" : ` ${resolveUrlId(ID)}`
        }`}
      >
        <Image
          x="0"
          y="0"
          width="100%"
          height="100%"
          xlinkHref="/mugshot2.png"
        />
      </Svg>
    </Root>
  );
};
