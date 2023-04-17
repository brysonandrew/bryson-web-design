import type { TKillConfig } from "./useKill";

export type TCollisionHandlerConfig = TKillConfig & {
  levelY: number;
};
export const useSourceCollision = () => {
  const handler = ({
    source,
    targets,
    levelY,
  }: TCollisionHandlerConfig) => {
    const collidedWithSource = targets.find((target) => {
      if (!target.instance || !source.instance) return;

      const sx = source.instance.position.x;
      const sy = source.instance.position.y;

      const tx = target.instance.position.x;
      const ty = target.instance.position.y + levelY;

      const dx = sx - tx;
      const dy = sy - ty;

      const d = Math.sqrt(dx * dx + dy * dy);
      return d < Math.min(target.height, target.width) / 2;
    });
    return collidedWithSource;
  };

  return handler;
};
