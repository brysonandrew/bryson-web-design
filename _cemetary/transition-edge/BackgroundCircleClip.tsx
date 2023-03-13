import type { FC } from "react";
import type {
  AnimationProps,
  SVGMotionProps,
  TargetAndTransition,
  VariantLabels,
} from "framer-motion";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { resolveSvgId } from "./Background";
const ID_PREFIX_CLIP = "ID_PREFIX_CLIP";

const Svg = styled(motion.svg)`
  position: fixed;
  left: 0%;
  top: 0%;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;

const Circle = styled(motion.circle)``;

const Rect = styled(motion.rect)``;

export type TClipStyle = SVGMotionProps<SVGCircleElement> &
  AnimationProps;
export type TDisplayStyle = SVGMotionProps<SVGRectElement> &
  AnimationProps;

export type TBackgroundCircleClipProps = {
  id: string;
  clipStyle: TClipStyle;
  displayStyle: TDisplayStyle;
  isTarget?: boolean;
};
export const BackgroundCircleClip: FC<
  TBackgroundCircleClipProps
> = ({ id, clipStyle, displayStyle, isTarget }) => {
  const clipId = resolveSvgId(ID_PREFIX_CLIP, id);

  return (
    <Svg height="100%" width="100%">
      <Rect
        {...{
          ...displayStyle,
          ...(Boolean(isTarget)
            ? {
                exit: displayStyle.initial as
                  | TargetAndTransition
                  | VariantLabels,
                initial: displayStyle.exit as VariantLabels,
              }
            : {}),
        }}
        clipPath={`url(#${clipId})`}
        fill="#000"
        height="100%"
        width="100%"
      />
      <clipPath id={`${clipId}`}>
        <Circle
          transition={{ ease: "easeOut", duration: 1 }}
          {...{
            ...clipStyle,
            ...(Boolean(isTarget)
              ? {
                  exit: clipStyle.initial as
                    | TargetAndTransition
                    | VariantLabels,
                  initial: clipStyle.exit as VariantLabels,
                }
              : {}),
          }}
        />
      </clipPath>
    </Svg>
  );
};
