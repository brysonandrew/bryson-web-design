import { MOTH_NAME } from "@constants/index";
import { useFrame } from "@react-three/fiber";
import { useMothContext } from "@state/Context";
import type { TFiringStart, TSource } from "@state/types";
import type { MutableRefObject } from "react";
import { useState } from "react";
import { generateUUID } from "three/src/math/MathUtils";
import type { TShot } from "./config";

export type TShotsConfig = {
  firingRate: number;
  firingStart: TFiringStart;
  firingSpeed: number;
  range: number;
};
type TConfig = {
  source: TSource;
  shotsRef: MutableRefObject<TShotsConfig>;
};
export const useShots = (config: TConfig) => {
  const { source, shotsRef } = config;
  const { mothRef } = useMothContext();

  const [shots, setShots] = useState<TShot[]>([]);

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
          x: source.instance.position.x,
          y: source.y,
        },
      ]);

      shotsRef.current.firingStart = ~~clock.elapsedTime;
    }
  });

  const handleRemove = (name: string) => {
    setShots((prev) => prev.filter((v) => v.name !== name));
  };

  return { shots, onRemove: handleRemove };
};
