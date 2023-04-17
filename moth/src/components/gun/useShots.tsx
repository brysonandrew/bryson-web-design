import { useState } from "react";
import type { MutableRefObject } from "react";
import type {
  TFiringStart,
  TSource,
} from "@moth-state/types";
import { useFire } from "@moth-hooks/frames/useFire";
import type { TShot } from "./config";

export type TShotFiringConfig = {
  firingRate: number;
  firingStart: TFiringStart;
  firingSpeed: number;
  range: number;
};
export type TShotsConfig = {
  source: TSource;
  shotsRef: MutableRefObject<TShotFiringConfig>;
};
export const useShots = (config: TShotsConfig) => {
  const [shots, setShots] = useState<TShot[]>([]);

  useFire({
    setShots,
    ...config,
  });

  const handleRemove = (name: string) => {
    setShots((prev) => prev.filter((v) => v.name !== name));
  };

  return { shots, onRemove: handleRemove };
};
