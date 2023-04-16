import { useMothContext } from "@moth-state/Context";
import { PADDING } from "../../constants";
import type { MutableRefObject } from "react";
import { HEIGHT } from "@moth-constants/index";
import type { TCurrent } from "../../types";
import { useViewportWidth } from "@moth-hooks/useViewportWidth";

type TConfig = {
  keyRef: MutableRefObject<TCurrent>;
};
export const useDirections = ({ keyRef }: TConfig) => {
  const { mothRef } = useMothContext();
  const width = useViewportWidth();
  const halfWidth = width / 2;

  const handler = () => {
    const { moth, level } = keyRef.current;
    const { thrust, speed, direction } = mothRef.current;

    if (moth === null || level === null) return;
    const { instance } = moth;
    if (
      thrust === "up" &&
      Math.abs(level.position.y) < HEIGHT
    ) {
      level.position.y = level.position.y - speed;
    }
    if (thrust === "down" && level.position.y < 0) {
      level.position.y = level.position.y + speed;
    }
    if (
      direction === "right" &&
      instance.position.x < halfWidth - PADDING
    ) {
      instance.position.x =
        instance.position.x + speed * 0.8;
    }
    if (
      direction === "left" &&
      instance.position.x > -halfWidth + PADDING
    ) {
      instance.position.x =
        instance.position.x - speed * 0.8;
    }
  };
  return handler;
};
