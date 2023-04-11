import { useMothContext } from "@moth-state/Context";
import type { MutableRefObject } from "react";
import type { TCurrent } from "../../types";

type TConfig = {
  keyRef: MutableRefObject<TCurrent>;
};
export const useAbilities = ({ keyRef }: TConfig) => {
  const { mothRef, level } = useMothContext();

  const handler = () => {
    const { blades } = keyRef.current;
    const { melee } = mothRef.current;

    if (blades === null || level === null) return;
    if (melee) {
      
      blades.rotation.z = blades.rotation.z + 0.2;
    } else if (blades.rotation.z !== 0) {
      blades.rotation.z = 0;
    }
  };
  return handler;
};
