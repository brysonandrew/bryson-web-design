import type { MutableRefObject } from "react";
import type { TCurrent } from "../../types";
import type { TSounds } from "../useKeyControl";
import { useMothContext } from "../../../../state/Context";

type TConfig = {
  keyRef: MutableRefObject<TCurrent>;
};
export const useDirections = ({ keyRef }: TConfig) => {
  const { mothRef } = useMothContext();

  const handler = (key: string, sounds: TSounds) => {
    const { controls } = keyRef.current;
    if (
      key === controls.direction.Forward &&
      mothRef.current.thrust.includes("up")
    ) {
      sounds.Hyperdrive.stop();
      mothRef.current.thrust =
        mothRef.current.thrust.filter((v) => v !== "up");
      return;
    }
    if (
      key === controls.direction.Reverse &&
      mothRef.current.thrust.includes("down")
    ) {
      sounds.Hyperdrive.stop();
      mothRef.current.thrust =
        mothRef.current.thrust.filter((v) => v !== "down");
      return;
    }
    if (
      key === controls.direction.Right &&
      mothRef.current.direction.includes("right")
    ) {
      sounds.Hyperdrive.stop();
      mothRef.current.direction =
        mothRef.current.direction.filter(
          (v) => v !== "right",
        );
      return;
    }
    if (
      key === controls.direction.Left &&
      mothRef.current.direction.includes("left")
    ) {
      sounds.Hyperdrive.stop();
      mothRef.current.direction =
        mothRef.current.direction.filter(
          (v) => v !== "left",
        );
      return;
    }
  };
  return handler;
};
