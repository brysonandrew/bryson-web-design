import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { ID } from "@components/effects/displacement";
import { resolveUrlId } from "@utils/resolveUrlId";
import { useDomCondition } from "@hooks/useDomCondition";
import {
  MUGSHOT_TRANSITION,
  MUGSHOT_TRANSITION_EXIT,
} from "@constants/animation";

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
    <Root
      key="Mugshot"
      className="absolute w-64 left-1/2 top-36 md:-right-16 md:w-72 lg:left-5/12 lg:top-40 lg:w-80 xl:left-4/6 xl:top-26"
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
