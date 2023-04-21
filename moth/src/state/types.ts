import type { MotionValue } from "framer-motion";
import type {
  Dispatch,
  Reducer,
  ReducerState,
  ReducerAction,
  MutableRefObject,
} from "react";
import type { Group, Mesh } from "three";
import type { TShopBooleanEntry } from "@moth-components/moth/types";
import type { TBossKey } from "@moth-components/hud/constants";
import type { LEVEL_KEYS } from "./constants";
import type { LIGHTHOUSE_CAPTAIN_KEY } from "@moth-components/enemies/bosses/lighthouse-captain/constants";
import type { TSpawnPoint } from "@moth-components/level/LighthouseCaptain/constants";

export type TInventoryRecord = Record<TShopKey, number>;
export type TInventory = Partial<TInventoryRecord>;
export type TSpecialsSwitchRecord = Partial<
  Record<TShopKey, boolean>
>;

export type TSpecialsRunningRecord = Partial<
  Record<TShopKey, number>
>;

export type TLevelsTuple = typeof LEVEL_KEYS;
export type TLevelKey = TLevelsTuple[number];

export type TDirection = "right" | "left";
export type TThrust = "up" | "down";
export type TMenu = null | "shop" | "sound" | "menu";
export type TFiringStart = number | null;
export type TBlades = Group | null;

export type TManaRecord = {
  speed: number;
  hyperdrive: number;
  melee: number;
};

export type TMothState = {
  direction: TDirection[];
  thrust: TThrust[];
  speed: number;
  range: number;
  hyperdrive: boolean;
  melee: boolean;
  cloak: boolean;
  mana: number;
  firingStart: TFiringStart;
  firingRate: number;
  firingSpeed: number;
  specials: TSpecialsRunningRecord;
};

export type TSource = Partial<TSpawnPoint> &
  Pick<TSpawnPoint, "progressId"> & {
    id: string;
    width: number;
    height: number;
    x: number;
    y: number;
    instance: Group;
    xp?: number;
    health?: number;
    offsetX?: number;
    offsetY?: number;
  };

export type TEnemyType =
  | "Mite"
  | "MiteI"
  | "Hercules"
  | "Dynastinae"
  | "Bug"
  | "Galamodo"
  | typeof LIGHTHOUSE_CAPTAIN_KEY;

export type TSpawn = Pick<
  TSpawnPoint,
  "health" | "progressId"
> & {
  id: string;
  type?: TEnemyType;
  width: number;
  height: number;
  x: number;
  y: number;
  xp: number;
  instance: null | Group;
};
type TAbilities = {
  Cloak: string;
  Melee: string;
  Hyperdrive: string;
  Fire: string;
};
export type TAbilitiesKey = keyof TAbilities;
export type TControlsRecord = {
  direction: {
    Forward: string;
    Reverse: string;
    Left: string;
    Right: string;
  };
  abilities: TAbilities;
  specials: {
    CycleUp: string;
    Use: string;
    CycleDown: string;
  };
};

export type TShopRecord = {
  NeutronicBeam: number;
  TacticalNuke: number;
  // Emp: number;
  // XanthopanProbiscus: number;
  // FungiProbiscus: number;
  // BuffaloBillSuit: number;
};
export type TSpecialsKey = keyof TShopRecord;
export type TMothInit = {
  moth: TMoth;
  spots: Mesh[];
  meshes: Mesh[];
  blades: TBlades;
  specials: TSpecialsSwitchRecord;
};

export type TKill = {
  throes: number;
  source: TSource;
};

export type TKillRecord = Record<string, TKill | null>;

export type TState = TMothInit & {
  currentLevel: null | TLevelKey;
  damage: Record<string, any>;
  start: null | boolean;
  isSound: boolean;
  context: AudioContext;
  master: GainNode;
  musicGain: GainNode;
  soundEffectsGain: GainNode;
  xp: number;
  menu: TMenu;
  isInit: boolean;
  activeSpecial: number;
  level: TLevel;
  enemies: TSource[];
  spawns: TSpawn[];
  enemyRecord: Record<string, TSource>;
  killRecord: TKillRecord;
  levels: TLevelsTuple;
  controls: TControlsRecord;
  shop: TShopRecord;
  inventory: TInventory;
  note: string | null;
};

export type TLocalState = Pick<
  TState,
  "controls" | "isSound" | "inventory"
>;

export type TContext = TState & {
  reset(): void;
  mothRef: MutableRefObject<TMothState>;
  dispatch: TDispatch;
};

export type TMotionValuePair = [
  x: MotionValue,
  y: MotionValue,
];

export type TLevel = null | Group;
export type TMoth = TSource | null;
export type TShopKey = keyof TShopRecord;

export type TLevelItem = {
  id: TBossKey | string;
  isLocked: boolean;
};

export type TAction =
  | {
      type: "toggle-sound";
      value: null;
    }
  | {
      type: "clear-note";
      value: null;
    }
  | {
      type: "murder";
      value: string;
    }
  | {
      type: "damage";
      value: Pick<TSource, "id"> & {
        amount: number;
      };
    }
  | {
      type: "kill";
      value: TSource;
    }
  | {
      type: "start";
      value: null;
    }
  | {
      type: "spawn-enemies";
      value: TSpawn[];
    }
  | {
      type: "special-end";
      value: TShopKey;
    }
  | {
      type: "special-use";
      value: TShopBooleanEntry;
    }
  | {
      type: "cycle-special-up";
      value: null;
    }
  | {
      type: "cycle-special-down";
      value: null;
    }
  | {
      type: "purchase";
      value: TShopKey;
    }
  | {
      type: "sell";
      value: TShopKey;
    }
  | {
      type: "menu";
      value: TMenu;
    }
  | {
      type: "init";
      value: null;
    }
  | {
      type: "fire";
      value: number | null;
    }
  | {
      type: "add-moth";
      value: NonNullable<TMothInit>;
    }
  | {
      type: "add-level";
      value: TLevel;
    }
  | {
      type: "update-enemy";
      value: TSource;
    }
  | {
      type: "add-enemy";
      value: TSource;
    }
  | {
      type: "add-enemies";
      value: TSource[];
    }
  | {
      type: "update-enemies";
      value: TSource[];
    }
  | {
      type: "reset";
      value: null;
    };

export type TActionType = null;
export type TActionValue = any;

export type TDispatch = Dispatch<TAction>;
export type TReducer = Reducer<TState, TAction>;
export type TReducerState = ReducerState<TReducer>;
export type TReducerAction = ReducerAction<TReducer>;
