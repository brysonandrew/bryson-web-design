import { useMothContext } from "@moth-state/Context";
import type { MutableRefObject } from "react";
import type { TCurrent } from "../../types";
import type { TSounds } from "../useKeyControl";

type TConfig = {
  keyRef: MutableRefObject<TCurrent>;
};
export const useSpecials = ({ keyRef }: TConfig) => {
  const { controls, mothRef } = useMothContext();

  const handler = (key: string, sounds: TSounds) => {
    const { blades, spots, meshes } = keyRef.current;

    if (blades === null) return;
    if (key === controls.specials.CycleUp) {
      sounds.CoinDrop.stop();
      mothRef.current.melee = false;
      return;
    }
    if (key === controls.specials.CycleDown) {
      sounds.CoinDrop.stop();
      mothRef.current.melee = false;
      return;
    }
  };
  return handler;
};
