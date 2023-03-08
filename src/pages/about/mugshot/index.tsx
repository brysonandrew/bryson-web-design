import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import styled from "@emotion/styled";
import { DELTA } from "../constants";
import {
  Displacement,
  ID,
} from "@components/effects/displacement";
import { resolveUrlId } from "@utils/resolveUrlId";

export const WIDTH = 280;
export const HEIGHT = 280;

const Svg = styled(motion.svg)``;
const Image = styled(motion.image)``;

export const Mugshot = () => {
  const { scrollY } = useScroll();

  return (
    <Svg
      width={WIDTH}
      height={HEIGHT}
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
    >
      <defs>
        <Displacement />
      </defs>
      <Image
        x="0"
        y="0"
        width={WIDTH}
        height={HEIGHT}
        xlinkHref="/mugshot2.png"
        filter={`contrast(150%) opacity(50%) ${resolveUrlId(
          ID,
        )}`}
      />
    </Svg>
  );
};
