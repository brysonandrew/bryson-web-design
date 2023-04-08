import type { TKillConfig } from "@hooks/useKill";
import { useSourceCollision } from "@hooks/useSourceCollision";
import { useFrame } from "@react-three/fiber";
import { useMothContext } from "@state/Context";
import type { TSource } from "@state/types";

type TConfig = {
  source: TSource;
  targets: TSource[];
};
export const useCollision = ({
  source,
  targets,
}: TConfig) => {
  const { dispatch, level, mothRef } = useMothContext();
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
      if (!mothRef.current.melee) {
        dispatch({
          type: "kill",
          value: killConfig.source,
        });
        dispatch({
          type: "kill",
          value: collidedWithSource,
        });
      } else {
        dispatch({
          type: "kill",
          value: collidedWithSource,
        }); 
      }
    }
  });

  return killConfig;
};
