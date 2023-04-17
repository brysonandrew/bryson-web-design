import { HEIGHT } from "@moth-constants/index";
import { useViewport } from "@moth-hooks/useViewport";
import { useMothContext } from "@moth-state/Context";
import { resolveSpawnEnemies } from "../../components/enemies/resolveSpawnEnemies";
import type { TSpawnPoint } from "@moth-components/level/LighthouseCaptain/constants";
import { generateUUID } from "three/src/math/MathUtils";
import { resolveX } from "./resolveX";
import { resolveY } from "./resolvey";

export const useTriggerSpawn = () => {
  const { dispatch, spawns } = useMothContext();
  const viewport = useViewport();
  const height = HEIGHT;

  const handler = ({
    progressId,
    threshold,
    count,
    type,
    ...props
  }: TSpawnPoint) => {
    const y = height * threshold + viewport.height * 0.5;
    const value = resolveSpawnEnemies({
      count,
      spawn: (_, index) => ({
        progressId,
        id: generateUUID(),
        type,
        instance: null,
        x: resolveX({ index, viewport, count }),
        y: resolveY({ index, viewport, count }),
        width: 10,
        height: 10,
        xp: 100,
        ...props,
      }),
    });
    dispatch({
      type: "spawn-enemies",
      value: [...spawns, ...value],
    });
  };

  return handler;
};
