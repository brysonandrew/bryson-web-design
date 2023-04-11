import { useMothContext } from "@moth-state/Context";
import type { MutableRefObject } from "react";
import type { TCurrent } from "../../types";

type TConfig = {
  keyRef: MutableRefObject<TCurrent>;
};
export const useSpecials = ({ keyRef }: TConfig) => {
  const { mothRef } = useMothContext();

  const handler = () => {
    if (keyRef.current.specials.NeutronicBeam) {
      const next =
        mothRef.current.specials.NeutronicBeam ?? 1;
      mothRef.current.specials.NeutronicBeam =
        Math.sin(next * 1000) + 2;
    }
    if (keyRef.current.specials.TacticalNuke) {
      const next =
        mothRef.current.specials.TacticalNuke ?? 1;
      mothRef.current.specials.TacticalNuke =
        Math.sin(next * 1000) + 1;
    }
  };
  return handler;
};
