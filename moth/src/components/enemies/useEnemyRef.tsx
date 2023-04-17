import { useMothContext } from "@moth-state/Context";
import type { TSpawn } from "@moth-state/types";
import type { Group } from "three";

type TConfig = TSpawn;
export const useEnemyRef = (spawn: TConfig) => {
  const { dispatch, enemyRecord } = useMothContext();
  const source = enemyRecord[spawn.id];

  const resolveRef = (instance: Group) => {
    if (instance && !source) {
      if (typeof spawn.x === "number" && !isNaN(spawn.x)) {
        instance.position.x = spawn.x;
      }
      if (typeof spawn.y === "number" && !isNaN(spawn.y)) {
        instance.position.y = spawn.y;
      }

      dispatch({
        type: "add-enemy",
        value: {
          ...spawn,
          instance,
        },
      });
    }
  };

  return { resolveRef, source };
};
