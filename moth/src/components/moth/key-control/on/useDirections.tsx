import { useMothContext } from "@moth-state/Context";
import type { MutableRefObject } from "react";
import type { TCurrent } from "../../types";
import type { TSounds } from "../useKeyControl";

type TConfig = {
  keyRef: MutableRefObject<TCurrent>;
};
export const useDirections = ({ keyRef }: TConfig) => {
  const { mothRef, controls } = useMothContext();

  const handler = (key: string, sounds: TSounds) => {
    if (
      key === controls.direction.Forward &&
      !mothRef.current.thrust.includes("up")
    ) {
      sounds.Hyperdrive.play();
      mothRef.current.thrust.push("up");
      return;
    }
    if (
      key === controls.direction.Reverse &&
      !mothRef.current.thrust.includes("down")
    ) {
      sounds.Hyperdrive.play();
      mothRef.current.thrust.push("down");
      return;
    }
    if (
      key === controls.direction.Right &&
      !mothRef.current.direction.includes("right")
    ) {
      sounds.Hyperdrive.play();
      mothRef.current.direction.push("right");
      return;
    }
    if (
      key === controls.direction.Left &&
      !mothRef.current.direction.includes("left")
    ) {
      sounds.Hyperdrive.play();
      mothRef.current.direction.push("left");
      return;
    }
  };
  return handler;
};
