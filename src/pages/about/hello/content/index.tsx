import styled from "@emotion/styled";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Typewriter } from "@components/typewriter";
import { Filter } from "@components/glitch/Filter";
import { Pattern } from "@components/glitch/Pattern";
import {
  WIDTH,
  HEIGHT,
  OVERHANG,
  HEIGHT_AND_OVERHANG,
  WIDTH_AND_OVERHANG,
  PATTERN_ID,
  GLITCH_ID,
  IMAGE_WIDTH,
} from "@components/glitch/config";
import COLORS from "../../../../../tailwind.config-colors.json";

const Root = styled(motion.div)`
  max-width: 600px;
`;

const Svg = styled(motion.svg)``;
const Image = styled(motion.image)``;
const Fluoro = styled(motion.line)``;

const Text = styled(motion.div)``;

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
          <Filter />
        </defs>
        <motion.g style={{ scale }}>
          <Fluoro
            x1={OVERHANG}
            x2={OVERHANG}
            y1={OVERHANG}
            y2={HEIGHT_AND_OVERHANG}
            strokeWidth="4"
            stroke={COLORS["teal-bright"]}
          />
          <Fluoro
            x1={OVERHANG}
            x2={WIDTH_AND_OVERHANG}
            y1={OVERHANG}
            y2={OVERHANG}
            strokeWidth="4"
            stroke={COLORS["teal-bright"]}
          />
          <Fluoro
            x1={WIDTH_AND_OVERHANG}
            x2={WIDTH_AND_OVERHANG}
            y1={OVERHANG}
            y2={HEIGHT_AND_OVERHANG}
            strokeWidth="4"
            stroke={COLORS["teal-bright"]}
          />
          <Fluoro
            x1={OVERHANG}
            x2={WIDTH_AND_OVERHANG}
            y1={HEIGHT_AND_OVERHANG}
            y2={HEIGHT_AND_OVERHANG}
            strokeWidth="4"
            stroke={COLORS["teal-bright"]}
          />
        </motion.g>

        <motion.rect
          x={0}
          y={0}
          width={WIDTH_AND_OVERHANG}
          height={HEIGHT_AND_OVERHANG}
          fill={`url(#${PATTERN_ID})`}
          filter={`url(#${GLITCH_ID})`}
          style={{ scale: scale2 }}
        />
        <Image
          x={WIDTH - IMAGE_WIDTH - OVERHANG * 0.5}
          y={OVERHANG * 0.5}
          width={IMAGE_WIDTH - OVERHANG}
          height={HEIGHT - OVERHANG}
          preserveAspectRatio="xMidYMid slice"
          xlinkHref="/mugshot2.png"
          filter={`url(#${GLITCH_ID})`}
          style={{ scale: scale3 }}
        />
      </Svg>
      <Text
        className="absolute top-6 left-0 bg-black-dark w-full z-20"
        style={{ scale }}
      >
        <div className="absolute top-4 left-6 w-5/12 h-1/2">
          <div className="relative pl-4 pr-2 pt-2 pb-3 w-full rounded-xs text-teal-bright bg-black-05">
            <Typewriter
              delay={600}
              wip="Hi, my name is Andrew and I make websites and
            web applications"
            >
              {(content) => <>{content}</>}
            </Typewriter>
          </div>
        </div>
      </Text>
    </Root>
  );
};
