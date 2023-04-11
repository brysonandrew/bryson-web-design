import { useMothContext } from "@moth-state/Context";
import type { TSpawn } from "@moth-state/types";
import type { Group } from "three";

type TConfig = TSpawn;
export const useEnemyRef = (spawn: TConfig) => {
  const { dispatch, enemyRecord } = useMothContext();
  const source = enemyRecord[spawn.name];

  const resolveRef = (instance: Group) => {
    if (instance && !source) {
      instance.position.x = spawn.x;
      instance.position.y = spawn.y;

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
