import { useMothContext } from "@moth-state/Context";
import type { MutableRefObject } from "react";
import type { TCurrent } from "../../types";
import { HEIGHT } from "@moth-components/level/LighthouseCaptain/constants";
import { useViewport } from "@moth-hooks/useViewport";
import {
  PADDING,
  PADDING_Y,
} from "@moth-components/moth/constants";

type TConfig = {
  keyRef: MutableRefObject<TCurrent>;
};
export const useDirections = ({ keyRef }: TConfig) => {
  const { mothRef } = useMothContext();
  const vieport = useViewport();
  const halfWidth = vieport.width / 2;

  const handler = () => {
    const { moth, level } = keyRef.current;
    const { thrust, speed, direction } = mothRef.current;

    if (moth === null || level === null) return;
    const { instance } = moth;
    if (
      thrust[thrust.length - 1] === "up" &&
      Math.abs(level.position.y) <
        HEIGHT + vieport.height * 0.5
    ) {
      level.position.y = level.position.y - speed;
    }
    if (
      thrust[thrust.length - 1] === "down" &&
      level.position.y < PADDING_Y
    ) {
      level.position.y = level.position.y + speed;
    }
    if (
      direction[direction.length - 1] === "right" &&
      instance.position.x < halfWidth - PADDING
    ) {
      instance.position.x =
        instance.position.x + speed * 0.8;
    }
    if (
      direction[direction.length - 1] === "left" &&
      instance.position.x > -halfWidth + PADDING
    ) {
      instance.position.x =
        instance.position.x - speed * 0.8;
    }
  };
  return handler;
};
