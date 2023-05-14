import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { ID as DISPLACEMENT_ID } from "@components/effects/displacement";
import { resolveUrlId } from "@utils/resolveUrlId";
import { useDomCondition } from "@hooks/useDomCondition";
import {
  MUGSHOT_TRANSITION,
  MUGSHOT_TRANSITION_EXIT,
} from "@constants/animation";
import {
  Filter as ColorFilter,
  ID as COLOR_ID,
} from "@components/effects/color";
import { FilterShell } from "@components/FilterShell";
import { MUGSHOT_SUFFIX } from "@components/Filters";
import COLORS from "@windi/config-colors.json";
import clsx from "clsx";
export const WIDTH = 280;
export const HEIGHT = 280;
const OFFSET = 6;

const Blinder = styled(motion.div)``;

const ID_CYCLES: (keyof typeof COLORS)[] = [
  "blue",
  "black",
  "red",
  "green",
];

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
          isSafari
            ? ""
            : `${resolveUrlId(
                `${DISPLACEMENT_ID}_${MUGSHOT_SUFFIX}`,
              )}`
        }`}
      >
        <FilterShell>
          {ID_CYCLES.map((key) => (
            <ColorFilter
              key={key}
              id={`${COLOR_ID}_${key}`}
              color={key}
            />
          ))}
        </FilterShell>
        {/* <Image
          width="100%"
          height="100%"
          xlinkHref="/mugshot2.png"
          className="opacity-80"
        /> */}
        {ID_CYCLES.map((_, index: number, { length }) => {
          const progress =
            (index / length) * Math.PI * 2 + Math.PI * 1.6;
          const x = Math.sin(progress) * OFFSET;
          const y = Math.cos(progress) * OFFSET;
          return (
            <Image
              key={`${x}_${y}`}
              filter={resolveUrlId(
                `${COLOR_ID}_${
                  ID_CYCLES[index % ID_CYCLES.length]
                }`,
              )}
              width="100%"
              height="100%"
              xlinkHref="/mugshot2.png"
              style={{
                opacity: 2 / length,
                mixBlendMode: 
                //"saturation",
                //"luminosity",
                //"lighten",
                //"hard-light",
                //"overlay",
                // "screen",
                //"hue"
                //"color",
                //"exclusion",
                "difference",
                //"multiply",
              }}
              transform={`translate(${x.toFixed(
                6,
              )} ${y.toFixed(6)})`}
            />
          );
        })}
        
      </Svg>
      <Blinder
        style={{
          bottom: "8%",
          left: 34,
          height: "20%",
          width: WIDTH + 46,
        }}
        className={clsx(
          "absolute bg-gradient-to-t from-black-dark z-10 pointer-events-none",
        )}
      />
    </Root>
  );
};
