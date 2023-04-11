import { useMothContext } from "@moth-state/Context";
import { SPEED } from "@moth-state/constants";
import type { MutableRefObject } from "react";
import { Mesh } from "three";
import type { TCurrent } from "../../types";
import type { TSounds } from "../useKeyControl";

type TConfig = {
  keyRef: MutableRefObject<TCurrent>;
};
export const useAbilities = ({ keyRef }: TConfig) => {
  const context = useMothContext();
  const { mothRef, controls } = context;

  const handler = (key: string, sound: TSounds) => {
    const { firingStart } = mothRef.current;
    const { blades, spots, meshes } = keyRef.current;

    if (blades === null) return;
    if (key === controls.abilities.Melee) {
      sound.Melee.stop();
      blades.children.forEach((mesh) => {
        if (
          mesh instanceof Mesh &&
          !Array.isArray(mesh.material)
        ) {
          mesh.material.opacity = 0.1;
        }
      });
      mothRef.current.melee = false;
      return;
    }
    if (
      key === controls.abilities.Fire &&
      typeof firingStart === "number"
    ) {
      sound.Fire.stop();
      mothRef.current.firingStart = null;
      return;
    }
    if (key === controls.abilities.Hyperdrive) {
      mothRef.current.hyperdrive = false;
      mothRef.current.speed = SPEED;
      spots.forEach((spot) => {
        spot.scale.set(0, 0, 0);
      });
      sound.Hyperdrive.stop();
      return;
    }
    if (key === controls.abilities.Cloak) {
      sound.Cloak.stop();
      mothRef.current.cloak = false;
      meshes.forEach((mesh) => {
        if (!Array.isArray(mesh.material)) {
          mesh.material.opacity = 1;
        }
      });
      return;
    }
  };
  return handler;
};
