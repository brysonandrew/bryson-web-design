import type { TSpawn } from "@moth-state/types";

export type TSpawnEnemiesConfig = {
  count: number;
  spawn(_: undefined, index: number): TSpawn;
};
export const resolveSpawnEnemies = ({
  count,
  spawn,
}: TSpawnEnemiesConfig): TSpawn[] =>
  [...Array(count)].map(spawn);
