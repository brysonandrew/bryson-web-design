import type { FC } from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
const ID_PREFIX_MASK = "ID_PREFIX_MASK";
export const resolveSvgId = (prefix: string, id: string) => `${prefix}_${id}`;

const Svg = styled(motion.svg)`
  position: fixed;
  left: 0%;
  top: 0%;
  width: 100%;
  height: 100%;
`;

const Circle = styled(motion.circle)``;

type TProps = {
  frameId: string;
  style: Required<any>;
};
export const Background: FC<TProps> = ({
  frameId,
  style,
}) => (
  <Svg height="100%" width="100%" layoutId={frameId}>
    <rect
      mask={`url(#${resolveSvgId(
        ID_PREFIX_MASK,
        frameId,
      )})`}
      fill="#000"
      height="100%"
      width="100%"
    />
    <mask id={resolveSvgId(ID_PREFIX_MASK, frameId)}>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill="#fff"
      />
      <Circle
        {...style}
        transition={{ ease: "easeOut" }}
        animate={{ r: `${style.r}%` }}
      />
    </mask>
  </Svg>
);
