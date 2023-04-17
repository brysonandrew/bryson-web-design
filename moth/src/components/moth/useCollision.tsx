import type { TKillConfig } from "@moth-hooks/useKill";
import { useSourceCollision } from "@moth-hooks/useSourceCollision";
import { useFrame } from "@react-three/fiber";
import { useMothContext } from "@moth-state/Context";
import type { TSource } from "@moth-state/types";

type TConfig = {
  source: TSource;
  targets: TSource[];
};
export const useCollision = ({
  source,
  targets,
}: TConfig) => {
  const { dispatch, level, damage, mothRef } =
    useMothContext();
  const killConfig: TKillConfig = {
    source,
    targets,
  };
  const handleCollide = useSourceCollision();

  useFrame(() => {
    const collidedWithSource = handleCollide({
      ...killConfig,
      levelY: level?.position.y ?? 0,
    });
    if (collidedWithSource) {
      const isStillAlive =
        isNaN(damage[collidedWithSource.id]) ||
        (collidedWithSource.health ?? 0) >
          (damage[collidedWithSource.id] ?? 0);
      if (isStillAlive) {
        if (!mothRef.current.melee) {
          dispatch({
            type: "kill",
            value: killConfig.source,
          });
        }
        dispatch({
          type: "damage",
          value: {
            id: collidedWithSource.id,
            amount: 5,
          },
        });
      } else {
        if (!mothRef.current.melee) {
          dispatch({
            type: "kill",
            value: killConfig.source,
          });
        }
        dispatch({
          type: "kill",
          value: collidedWithSource,
        });
      }
    }
  });

  return killConfig;
};
