import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import styled from "@emotion/styled";
import { Filter as GlitchFilter } from "@components/effects/glitch/Filter";
import { Filter as LightingFilter } from "@components/effects/lighting/Filter";
import { Pattern } from "@components/effects/glitch/Pattern";
import {
  WIDTH,
  HEIGHT,
} from "@components/effects/glitch/config";
import { Lights } from "./Lights";
import { Background } from "./Background";
import { Text } from "./Text";
import { Image } from "./Image";

const Root = styled(motion.div)`
  max-width: 600px;
`;

const Svg = styled(motion.svg)``;

export const Content = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 200], [1, 0.8]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const scale2 = useTransform(scrollY, [25, 200], [1, 0.8]);
  const scale3 = useTransform(scrollY, [0, 200], [1, 0.8]);

  return (
    <Root className="flex w-full" style={{ opacity }}>
      <Svg
        width={WIDTH}
        height={HEIGHT}
        viewBox={`${0} ${0} ${WIDTH} ${HEIGHT}`}
      >
        <defs>
          <Pattern />
          <GlitchFilter />
          <LightingFilter />
        </defs>
        <Lights scale={scale} />
        <Background scale={scale2} />
        <Image scale={scale} />
      </Svg>
      <Text scale={scale} />
    </Root>
  );
};
