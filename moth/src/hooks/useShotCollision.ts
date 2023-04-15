import type { TSource } from "@moth-state/types";
import type {
  TKillConfig,
  TKillHandlerConfig,
} from "./useKill";

export type TCollisionHandlerConfig = TKillConfig &
  TKillHandlerConfig & {
    levelY: number;
    speed: number;
  };
export const useShotCollision = () => {
  const handler = ({
    targets,
    levelY,
    x,
    y,
    width,
    height,
    speed,
  }: TCollisionHandlerConfig) => {
    const collidedWithShot = targets.find(
      (target: TSource) => {
        if (!target.instance) return;
        if (
          typeof width === "number" &&
          typeof height === "number"
        ) {
          const tx = target.instance.position.x;
          const ty =
            target.instance.position.y +
            levelY * Math.sign(speed);
          
          if (
            x < tx + target.width &&
            x + width > tx &&
            y < ty + target.height &&
            height + y > ty
          ) {
            return true;
          }
        }

        const sx = x;
        const sy = y;

        const tx = target.instance.position.x;
        const ty =
          target.instance.position.y +
          levelY * Math.sign(speed);

        const dx = sx - tx;
        const dy = sy - ty;

        const d = Math.sqrt(dx * dx + dy * dy);
        return d < (target.height + target.width) / 2;
      },
    );
    return collidedWithShot;
  };

  return handler;
};
