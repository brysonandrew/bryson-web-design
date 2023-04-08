import { HEIGHT } from "@constants/index";
import { useViewport } from "@hooks/useViewport";
import { useMothContext } from "@state/Context";
import { generateUUID } from "three/src/math/MathUtils";
import { resolveSpawnEnemies } from "../../components/enemies/resolveSpawnEnemies";
import type { TSpawnPoint } from "../../components/level/0/constants";

export const useTriggerSpawn = () => {
  const { dispatch, spawns } = useMothContext();
  const viewport = useViewport();
  const height = HEIGHT;

  const handler = ({
    name,
    threshold,
    count,
    type,
    ...props
  }: TSpawnPoint) => {
    const y = height * threshold + viewport.height * 0.5;
    const value = resolveSpawnEnemies({
      count,
      spawn: (_, i) => ({
        type,
        instance: null,
        name: generateUUID(),
        x:
          viewport.width * (i / count) -
          viewport.width * 0.125,
        y,
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
