import { useViewport } from "@moth-hooks/useViewport";
import { useMothContext } from "@moth-state/Context";
import { resolveSpawnEnemies } from "../../components/enemies/resolveSpawnEnemies";
import {
  HEIGHT,
  type TSpawnPoint,
} from "@moth-components/level/LighthouseCaptain/constants";
import { generateUUID } from "three/src/math/MathUtils";
import { resolveX } from "./resolveX";
import { resolveY } from "./resolveY";

export const useTriggerSpawn = () => {
  const { dispatch, spawns } = useMothContext();
  const viewport = useViewport();

  const handler = ({
    progressId,
    threshold,
    count,
    type,
    ...props
  }: TSpawnPoint) => {
    const initialY =
      HEIGHT * threshold + viewport.height * 0.5;
    const value = resolveSpawnEnemies({
      count,
      spawn: (_, index) => {
        const y =
          resolveY({ index, viewport, count }) + initialY;
        const width = props.width ?? 10;
        return {
          progressId,
          id: generateUUID(),
          type,
          instance: null,
          x: resolveX({ index, viewport, count }),
          y,
          width,
          height: 10,
          xp: 100,
          ...props,
        };
      },
    });
    dispatch({
      type: "spawn-enemies",
      value: [...spawns, ...value],
    });
  };

  return handler;
};
