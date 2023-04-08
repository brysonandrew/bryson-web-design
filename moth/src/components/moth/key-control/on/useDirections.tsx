import { useMothContext } from "@state/Context";
import type { MutableRefObject } from "react";
import type { TCurrent } from "../../types";
import type { TSounds } from "../useKeyControl";

type TConfig = {
  keyRef: MutableRefObject<TCurrent>;
};
export const useDirections = ({ keyRef }: TConfig) => {
  const { mothRef, controls } = useMothContext();

  const handler = (key: string, sounds: TSounds) => {
    if (key === controls.direction.Forward) {
      sounds.Hyperdrive.play();
      mothRef.current.thrust = "up";
      return;
    }
    if (key === controls.direction.Reverse) {
      sounds.Hyperdrive.play();
      mothRef.current.thrust = "down";
      return;
    }
    if (key === controls.direction.Right) {
      sounds.Hyperdrive.play();
      mothRef.current.direction = "right";
      return;
    }
    if (key === controls.direction.Left) {
      sounds.Hyperdrive.play();
      mothRef.current.direction = "left";
      return;
    }
  };
  return handler;
};
