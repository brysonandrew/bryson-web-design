import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import styled from "@emotion/styled";
import {
  DELTA,
  GAP_1,
  HEADER_OFFSET_Y,
} from "../constants";
import {
  Displacement,
  ID,
} from "@components/effects/displacement";
import { resolveUrlId } from "@utils/resolveUrlId";

export const WIDTH = 280;
export const HEIGHT = 280;

const Root = styled(motion.div)``;
const Svg = styled(motion.svg)``;
const Image = styled(motion.image)``;

export const Mugshot = () => (
  <Root className="absolute w-64 right-0 top-36 sm:-right-14 md:-right-16 md:w-72 lg:-right-18 lg:top-40 lg:w-80 xl:top-32">
    <Svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
    >
      <defs>
        <Displacement />
      </defs>
      <Image
        x="0"
        y="0"
        width="100%"
        height="100%"
        xlinkHref="/mugshot2.png"
        filter={`contrast(175%) opacity(50%) ${resolveUrlId(
          ID,
        )}`}
      />
    </Svg>
  </Root>
);
