import type {
  TInventory,
  TShopKey,
  TSpecialsSwitchRecord,
} from "@moth-state/constants";
import type {
  TBlades,
  TControlsRecord,
  TLevel,
  TMoth,
} from "@moth-state/types";
import type { Mesh } from "three";

export type TCurrent = {
  moth: TMoth;
  spots: Mesh[];
  meshes: Mesh[];
  level: TLevel;
  blades: TBlades;
  controls: TControlsRecord;
  activeSpecial: number;
  inventory: TInventory;
  specials: TSpecialsSwitchRecord;
  isSound: boolean;
};

export type TShopNumberEntry = [TShopKey, number];
export type TShopBooleanEntry = [TShopKey, number];
