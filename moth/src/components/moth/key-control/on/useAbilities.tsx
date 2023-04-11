import { useMothContext } from "@moth-state/Context";
import { MAX_SPEED } from "@moth-state/constants";
import type { MutableRefObject } from "react";
import { Mesh, MeshBasicMaterial } from "three";
import type { TCurrent } from "../../types";
import type { TAbilitiesSounds } from "@moth-hooks/sounds/abilities";

type TConfig = {
  keyRef: MutableRefObject<TCurrent>;
};
export const useAbilities = ({ keyRef }: TConfig) => {
  const { controls, mothRef } = useMothContext();

  const handler = (
    key: string,
    sounds: TAbilitiesSounds,
  ) => {
    const { blades, spots, meshes } = keyRef.current;

    if (blades === null) return;
    if (key === controls.abilities.Melee) {
      sounds.Melee.play();
      blades.children.forEach((mesh) => {
        if (
          mesh instanceof Mesh &&
          !Array.isArray(mesh.material)
        ) {
          mesh.material.opacity = 0.5;
        }
      });
      mothRef.current.melee = true;
      return;
    }
    if (key === controls.abilities.Fire) {
      sounds.Fire.play();
      mothRef.current.firingStart = 0;
      return;
    }
    if (key === controls.abilities.Hyperdrive) {
      sounds.Hyperdrive.play();
      mothRef.current.hyperdrive = true;
      mothRef.current.speed = MAX_SPEED;
      const spotSize = 0.6;
      spots.forEach((spot) => {
        spot.scale.set(spotSize, spotSize, spotSize);
      });
      return;
    }
    if (key === controls.abilities.Cloak) {
      sounds.Cloak.play();
      mothRef.current.cloak = true;
      meshes.forEach((mesh) => {
        if (mesh.material instanceof MeshBasicMaterial) {
          mesh.material.opacity = 0.4;
        }
      });
      return;
    }
  };
  return handler;
};
