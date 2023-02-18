import { FC } from "react";
import { motion } from "framer-motion";
import type { SVGMotionProps } from "framer-motion";
import styled from "@emotion/styled";
import type { TChildren } from "@t/index";
import {
  GLITCH_ID,
  HEIGHT,
  IMAGE_WIDTH,
  PATTERN_ID,
  WIDTH,
} from "./config";
import { Pattern } from "./Pattern";
import { Filter } from "./Filter";

const Root = styled(motion.svg)``;
const Image = styled.image``;

type TProps = SVGMotionProps<SVGSVGElement> & {
  children?: TChildren;
};
export const Glitch: FC<TProps> = ({
  children,
  ...props
}) => (
  <Root
    width={WIDTH}
    height={HEIGHT}
    viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
    {...props}
  >
    <defs>
      <Pattern />
      <Filter />
    </defs>
    <rect
      width={WIDTH}
      height={HEIGHT}
      fill={`url(#${PATTERN_ID})`}
      filter={`url(#${GLITCH_ID})`}
    />
    <Image
      x={WIDTH - IMAGE_WIDTH}
      y="0"
      width={IMAGE_WIDTH}
      height={HEIGHT}
      preserveAspectRatio="xMidYMid slice"
      xlinkHref="/mugshot2.png"
      filter={`url(#${GLITCH_ID})`}
    />
  </Root>
);
