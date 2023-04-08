import { useMothContext } from "@state/Context";
import type { TSource } from "@state/types";
import type { Point } from "framer-motion";
import type { Mesh } from "three";
import { useShotCollision } from "./useShotCollision";

export type TKillHandlerConfig = Point & {
  mesh: Mesh;
  name: string;
  width?: number;
  height?: number;
};
export type TKillConfig = {
  source: TSource;
  targets: TSource[];
};
type TConfig = TKillConfig & {
  onRemove(name: string): void;
  speed: number;
  range: number;
};
export const useKill = (config: TConfig) => {
  const { source, targets, speed, range, onRemove } =
    config;
  const { level, damage, dispatch } = useMothContext();
  const handleCollision = useShotCollision();

  const handler = (config: TKillHandlerConfig) => {
    if (!level) return;
    const levelY = level.position.y;
    const enemyCollided = handleCollision({
      ...config,
      source,
      targets,
      speed,
      levelY,
    });
    if (Math.abs(config.y - source.y) > range) {
      onRemove(config.name);
    }
    if (enemyCollided) {
      const isStillAlive =
        isNaN(damage[enemyCollided.name]) ||
        (enemyCollided.health ?? 0) >
          (damage[enemyCollided.name] ?? 0);

      if (isStillAlive) {
        dispatch({
          type: "damage",
          value: {
            name: enemyCollided.name,
            amount: 1
          },
        });
      } else {
        dispatch({
          type: "kill",
          value: enemyCollided,
        });
      }
    }
  };
  return handler;
};
