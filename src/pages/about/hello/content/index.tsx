import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import styled from "@emotion/styled";
import {
  WIDTH,
  HEIGHT,
  OVERHANG,
  WIDTH_AND_OVERHANG,
  HEIGHT_AND_OVERHANG,
} from "@components/effects/glitch/_cemetary/config";

import { Text } from "./Text";
import { Image } from "./Image";

import COLORS from "@windi/config-colors.json";
import {
  Displacement,
  ID,
} from "@components/effects/displacement";

const Root = styled(motion.div)``;

const Svg = styled(motion.svg)``;

export const Content = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 200], [1, 0.8]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <>
      <svg width="0" height="0">
        <Displacement />
      </svg>
      <Root
        className="relative"
        style={{
          opacity,
          filter: `url(#${ID})`,
        }}
      >
        <Svg
          width="100%"
          height={HEIGHT}
          viewBox={`${0} ${0} ${WIDTH} ${HEIGHT}`}
        >
          <rect
            x1={OVERHANG}
            y1={OVERHANG}
            width={WIDTH_AND_OVERHANG}
            height={HEIGHT_AND_OVERHANG}
            rx="4"
            ry="4"
            fill={COLORS["black-04"]}
          />
          <Image scale={scale} />
        </Svg>
        <Text scale={scale} />
      </Root>
    </>
  );
};
