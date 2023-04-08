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
    const { thrust, direction } = mothRef.current;
    if (
      key === controls.direction.Forward &&
      thrust === "up"
    ) {
      sounds.Hyperdrive.stop();
      mothRef.current.thrust = null;
      return;
    }
    if (
      key === controls.direction.Reverse &&
      thrust === "down"
    ) {
      sounds.Hyperdrive.stop();
      mothRef.current.thrust = null;
      return;
    }

    if (
      key === controls.direction.Right &&
      direction === "right"
    ) {
      sounds.Hyperdrive.stop();
      mothRef.current.direction = null;
      return;
    }
    if (
      key === controls.direction.Left &&
      direction === "left"
    ) {
      sounds.Hyperdrive.stop();
      mothRef.current.direction = null;
      return;
    }
  };
  return handler;
};
