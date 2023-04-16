import { PADDING } from "@moth-components/moth/constants";
import type { TSpawn, TSource } from "@moth-state/types";
import type { Group } from "three";

type TConfig = TSpawn & {
  instance: Group;
};
export const resolveSource = (
  config: Pick<TConfig, "instance"> &
    Partial<TSource>,
): TSource => ({
  width: 2,
  height: 2,
  x: PADDING,
  y: PADDING,
  xp: 0,
  ...config,
});
