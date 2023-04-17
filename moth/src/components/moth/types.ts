import type {
  TBlades,
  TDispatch,
  TInventory,
  TLevel,
  TShopKey,
  TSpecialsSwitchRecord,
  TState,
} from "@moth-state/types";
import type { Mesh } from "three";

export type TCurrent = Pick<
  TState,
  "note" | "isSound" | "controls" | "moth"
> & {
  spots: Mesh[];
  meshes: Mesh[];
  level: TLevel;
  blades: TBlades;
  activeSpecial: number;
  inventory: TInventory;
  specials: TSpecialsSwitchRecord;
};

export type TShopNumberEntry = [TShopKey, number];
export type TShopBooleanEntry = [TShopKey, number];
