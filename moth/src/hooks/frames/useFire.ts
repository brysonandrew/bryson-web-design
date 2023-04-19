import type { TShot } from "@moth-components/gun/config";
import type { TShotsConfig } from "@moth-components/gun/useShots";
import { MOTH_NAME } from "@moth-constants/index";
import { useMothContext } from "@moth-state/Context";
import { useFrame } from "@react-three/fiber";
import { generateUUID } from "three/src/math/MathUtils";
import type { Dispatch, SetStateAction} from "react";
import { useState } from "react";

type TConfig = TShotsConfig & {
  setShots: Dispatch<SetStateAction<TShot[]>>;
};
export const useFire = (config: TConfig) => {
  const { setShots, source, shotsRef } = config;
  const { mothRef } = useMothContext();
  useFrame(({ clock }) => {
    if (
      shotsRef.current.firingStart === null ||
      (mothRef.current.cloak &&
        source.instance.name !== MOTH_NAME)
    )
      return;

    const d =
      ~~clock.elapsedTime - shotsRef.current.firingStart;

    if (d > shotsRef.current.firingRate) {
      setShots((prev) => [
        ...prev,
        {
          name: generateUUID(),
          x:
            source.instance.position.x +
            (source.offsetX ?? 0),
          y:
            source.instance.position.y +
            (source.offsetY ?? 0),
        },
      ]);

      shotsRef.current.firingStart = ~~clock.elapsedTime;
    }
  });
};
