import type { TCollisionHandlerConfig } from "@moth-hooks/useShotCollision";
import { useShotCollision } from "@moth-hooks/useShotCollision";
import { useFrame } from "@react-three/fiber";
import { useMothContext } from "@moth-state/Context";
import type { TSpecialsKey } from "@moth-state/types";
import type { MutableRefObject } from "react";
import type { Mesh } from "three";

type TConfig = {
  name: TSpecialsKey;
  width: number;
  height: number;
  ref: MutableRefObject<null | Mesh>;
};
export const useMassCollision = ({
  name,
  width,
  height,
  ref,
}: TConfig) => {
  const {
    moth,
    mothRef,
    enemies,
    level,
    damage,
    dispatch,
  } = useMothContext();
  const handleKill = useShotCollision();

  useFrame(() => {
    if (
      enemies &&
      level &&
      moth &&
      ref.current &&
      mothRef.current
    ) {
      ref.current.scale.x =
        mothRef.current.specials[name] ?? 0;
      const config: TCollisionHandlerConfig = {
        name,
        mesh: ref.current,
        source: moth,
        targets: enemies,
        x: moth.instance.position.x - width / 2,
        y: moth.instance.position.y, // - height / 2,
        levelY: level.position.y,
        width,
        height,
        speed: 0.01,
      };
      const killSource = handleKill(config);
      if (typeof killSource === "undefined") return;
      const isStillAlive =
        isNaN(damage[killSource.id]) ||
        (killSource.health ?? 0) >
          (damage[killSource.id] ?? 0);
      if (isStillAlive) {
        dispatch({
          type: "damage",
          value: {
            id: killSource.id,
            amount: 5,
          },
        });
      } else {
        dispatch({
          type: "kill",
          value: killSource,
        });
      }
    }
  });
};
