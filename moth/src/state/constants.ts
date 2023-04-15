import { RIVER_HORSE_KEY } from "@moth-components/hud/constants";
import type { TLocalState, TMothState, TState } from "./types";
const context = new AudioContext();
const master = new GainNode(context, { gain: 0.5 });
const musicGain = new GainNode(context, { gain: 0.5 });
const soundEffectsGain = new GainNode(context, {
  gain: 0.01,
});

export const MOTH_LOCAL_STORAGE_KEY = "MOTH_LOCAL_STORAGE_KEY"

export const SHOP_INIT = {
  NeutronicBeam: 200,
  TacticalNuke: 200,
  // Emp: 200,
  // XanthopanProbiscus: 2200,
  // FungiProbiscus: 400,
  // BuffaloBillSuit: 500,
} as const;

export type TShopKey = keyof typeof SHOP_INIT;

export const SHOP_KEYS = Object.keys(
  SHOP_INIT,
) as TShopKey[];

export type TInventoryRecord = Record<TShopKey, number>;
export type TInventory = Partial<TInventoryRecord>;

const SPECIALS_999: TInventory = SHOP_KEYS.reduce(
  (a: TInventory, v: TShopKey) => {
    a = {
      ...a,
      [v]: 999,
    };
    return a;
  },
  {},
);

export type TSpecialsSwitchRecord = Partial<
  Record<TShopKey, boolean>
>;

export type TSpecialsRunningRecord = Partial<
  Record<TShopKey, number>
>;

export const LOCAL_STATE: TLocalState = {
  isSound: true,
  levels: [
    {
      name: RIVER_HORSE_KEY,
      isLocked: true
    }
  ],
  inventory: SPECIALS_999,
  controls: {
    direction: {
      Forward: "ArrowUp",
      Reverse: "ArrowDown",
      Left: "ArrowLeft",
      Right: "ArrowRight",
    },
    abilities: {
      Cloak: "a",
      Melee: "s",
      Hyperdrive: "d",
      Fire: "f",
    },
    specials: {
      CycleUp: "g",
      Use: "v",
      CycleDown: "c",
    },
  },
}


master.connect(context.destination);
export const STATE: TState = {
  ...LOCAL_STATE,
  start: false,
  context,
  master,
  musicGain,
  soundEffectsGain,
  xp: 110,
  activeSpecial: 0,
  isInit: true,
  menu: null,
  level: null,
  enemies: [],
  spawns: [],
  enemyRecord: {},
  moth: null,
  spots: [],
  blades: null,
  meshes: [],
  killRecord: {},
  shop: SHOP_INIT,
  specials: {},
  damage: {},

  note: null,
};


export const SPEED = 0.5;
export const MAX_SPEED = SPEED * 2;
export const SPEED_FRAME_COUNT = 10;

export const MOTH_STATE: TMothState = {
  firingStart: null,
  firingRate: 0.01,
  firingSpeed: 4,
  speed: SPEED,
  range: 120,
  direction: null,
  thrust: null,
  hyperdrive: false,
  melee: false,
  cloak: false,
  specials: {},
  mana: 10,
};
