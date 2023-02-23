import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import styled from "@emotion/styled";
import { Filter as GlowFilter } from "@components/effects/glow/Filter";

import {
  WIDTH,
  HEIGHT,
  OVERHANG,
  WIDTH_AND_OVERHANG,
  HEIGHT_AND_OVERHANG,
} from "@components/effects/glitch/_cemetary/config";

import { Text } from "./Text";
import { Image } from "./Image";

import COLORS from "@tailwind/config-colors.json";

const Root = styled(motion.div)`
  max-width: 600px;
`;

const Svg = styled(motion.svg)``;

export const Content = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 200], [1, 0.8]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <Root className="flex w-full" style={{ opacity }}>
      <Svg
        width={WIDTH}
        height={HEIGHT}
        viewBox={`${0} ${0} ${WIDTH} ${HEIGHT}`}
        fill="none"
      >
        <defs>
          <GlowFilter />
        </defs>
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
  );
};
