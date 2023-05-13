import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { ID as DISPLACEMENT_ID } from "@components/effects/displacement";
import { resolveUrlId } from "@utils/resolveUrlId";
import { useDomCondition } from "@hooks/useDomCondition";
import {
  MUGSHOT_TRANSITION,
  MUGSHOT_TRANSITION_EXIT,
} from "@constants/animation";
import { Filter as ColorFilter } from "@components/effects/color";
import { FilterShell } from "@components/FilterShell";
import clsx from "clsx";

export const WIDTH = 280;
export const HEIGHT = 280;
const OFFSET = 4;

const Blinder = styled(motion.div)``;

export const COLOR_IDS = {
  red: "COLOR_IDS.red",
  teal: "COLOR_IDS.teal",
  blue: "COLOR_IDS.blue",
  green: "COLOR_IDS.green",
};

const ID_CYCLES: (keyof typeof COLOR_IDS)[] = [
  "teal",
  "red",
  "blue",
];

const resolveSquare = (offset: number) => [
  [offset, offset],
  [-offset, offset],
  [offset, -offset],
  [-offset, -offset],
];

const resolveLine = (offset: number, index: number) =>
  (offset * length * index) / length -
  (offset * length) / 2;

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
    <Root
      className="absolute w-64 left-1/2 top-40 md:-right-16 md:w-72 lg:left-5/12 lg:top-42 lg:w-80 xl:left-4/6 xl:top-26"
      initial={{ opacity: 0, filter: "blur(20px)" }}
      animate={{ opacity: 0.86, filter: "blur(0px)" }}
      exit={{
        opacity: 0,
        filter: "blur(2px)",
        transition: MUGSHOT_TRANSITION_EXIT,
      }}
      transition={MUGSHOT_TRANSITION}
    >
      <Svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        filter={`${
          isSafari ? "" : `${resolveUrlId(DISPLACEMENT_ID)}`
        }`}
      >
        <FilterShell>
          {ID_CYCLES.map((key) => (
            <ColorFilter id={COLOR_IDS[key]} color={key} />
          ))}
        </FilterShell>
        {[...Array(12)].map(
          (_, index: number, { length }) => {
            const progress = index / length;
            const x =
              Math.sin(progress * Math.PI * 2) * OFFSET;
            const y =
              Math.cos(progress * Math.PI * 2) * OFFSET;
            return (
              <Image
                key={x + y + ""}
                filter={resolveUrlId(
                  COLOR_IDS[
                    ID_CYCLES[index % ID_CYCLES.length]
                  ],
                )}
                x="0"
                y="0"
                width="100%"
                height="100%"
                xlinkHref="/mugshot2.png"
                style={{
                  // opacity: (index / length),
                  mixBlendMode:
                    // "hue"
                    //"color",
                    //"exclusion",
                    "difference",
                  //"multiply",
                }}
                transform={`translate(${x} ${y})`}
              />
            );
          },
        )}
        <Image
          x={0}
          y={0}
          width="100%"
          height="100%"
          xlinkHref="/mugshot2.png"
          className="opacity-70"
        />
      </Svg>
      <Blinder
        className={clsx(
          "absolute bottom-0 left-0 bg-gradient-to-t w-full h-full from-black-dark z-10 pointer-events-none",
        )}
      />
    </Root>
  );
};
