import { TURBULANCE_DEFAULTS } from "@components/effects/displacement/config";
import styled from "@emotion/styled";
import type { TMedia } from "@pages/showcase/config";
import { useDetectGPU } from "@react-three/drei";
import { resolveUrlId } from "@utils/resolveUrlId";
import type { MotionValue } from "framer-motion";
import {
  motion,
  useMotionTemplate,
  useTransform,
  useVelocity,
} from "framer-motion";
import type { FC } from "react";

const id = "MOTION_BLUR_ID";
const intensity = 40;

export const Root = styled(motion.img)``;

type TProps = {
  item: TMedia;
  motionX: MotionValue<number>;
};
export const Image: FC<TProps> = ({ item, motionX }) => {
  const { isMobile, tier } = useDetectGPU();
  const { key, name, file } = item;
  const velocity = useVelocity(motionX);
  // const acceleration = useVelocity(velocity);
  const v = useTransform(
    velocity,
    (v) => Math.abs(v * 10) + 10,
  );
  const bf = useMotionTemplate`0 ${v}`;

  return (
    <>
      {tier > 1 && !isMobile && (
        <svg width="0" height="0">
          <motion.filter
            id={id}
            x="-50%"
            y="-50%"
            height="200%"
            width="200%"
          >
            <>
              <motion.feTurbulence
                baseFrequency={bf}
                numOctaves={v}
                seed={v}
                type="fractalNoise"
                in="SourceGraphic"
                result={`${id}-turbulence`}
              />
              <motion.feMorphology
                in={`${id}-turbulence`}
                operator="dilate"
                radius="10"
                result={`${id}-morph`}
              />
              <motion.feOffset
                in="SourceGraphic"
                dx={-intensity * 0.5}
                dy={-intensity * 0.5}
                result={`${id}-offset`}
              />
              <motion.feDisplacementMap
                in2={`${id}-morph`}
                in={`${id}-offset`}
                scale={intensity}
                xChannelSelector="R"
                yChannelSelector="G"
                result={"DISPLACEMENT"}
              />
            </>
          </motion.filter>
        </svg>
      )}
      <Root
        className="absolute left-1/2 top-1/2 max-w-full max-h-full shadow-teal-dark-02"
        src={`/screens/${name}/${file}`}
        alt={key}
        onPointerDown={(e) => e.preventDefault()}
        style={{
          x: "-50%",
          y: "-50%",
          filter: resolveUrlId(id),
        }}
      />
    </>
  );
};
