import type { TBossKey } from "@moth-components/hud/constants";
import { BOSSES } from "@moth-components/hud/constants";
import { SHOP_INIT, SHOP_KEYS, STATE } from "./constants";
import type { TState, TReducerAction } from "./types";

export const reducer = (
  state: TState,
  { type, value }: TReducerAction,
) => {
  switch (type) {
    case "clear-note": {
      return {
        ...state,
        note: null,
      };
    }
    case "start": {
      return {
        ...state,
        start: true,
      };
    }
    case "special-end": {
      return {
        ...state,
        specials: {
          ...state.specials,
          [value]: null,
        },
      };
    }
    case "special-use": {
      const [key, count] = value;
      return {
        ...state,
        inventory: {
          ...state.inventory,
          [key]: count - 1,
        },
        specials: {
          ...state.specials,
          [key]: true,
        },
      };
    }
    case "cycle-special-up": {
      const next = state.activeSpecial - 1;
      return {
        ...state,
        activeSpecial:
          next < 0 ? SHOP_KEYS.length - 1 : next,
      };
    }
    case "cycle-special-down": {
      return {
        ...state,
        activeSpecial:
          (state.activeSpecial + 1) % SHOP_KEYS.length,
      };
    }
    case "purchase": {
      const nextInventory = {
        ...state.inventory,
        [value]: (state.inventory[value] ?? 0) + 1,
      };
      return {
        ...state,
        inventory: nextInventory,
        xp: state.xp - SHOP_INIT[value] ?? 0,
      };
    }
    case "sell": {
      const nextInventory = {
        ...state.inventory,
        [value]: (state.inventory[value] ?? 0) - 1,
      };
      return {
        ...state,
        inventory: nextInventory,
        xp: state.xp + SHOP_INIT[value] * 0.5 ?? 0,
      };
    }
    case "toggle-sound": {
      return {
        ...state,
        isSound: !state.isSound,
      };
    }
    case "menu": {
      return {
        ...state,
        menu: state.menu ? null : value,
      };
    }
    case "init": {
      return {
        ...state,
        isInit: false,
      };
    }
    case "fire": {
      return {
        ...state,
        firingStart: 0,
      };
    }
    case "damage": {
      return {
        ...state,
        damage: {
          ...state.damage,
          [value.id]:
            (state.damage[value.id] ?? 0) +
            (value.amount ?? 1),
        },
      };
    }
    case "kill": {
      const enemies = state.enemies.filter(
        (v) => v.id !== value.id,
      );

      return {
        ...state,
        enemies,
        killRecord: {
          ...state.killRecord,
          [value.id]: {
            source: value,
            throes: 100,
          },
        },
        xp: state.xp + (value.xp ?? 0),
        note:
          BOSSES.includes(value?.type as TBossKey) &&
          typeof value.type === "string"
            ? value.type
            : null,
      };
    }
    case "murder": {
      return {
        ...state,
        killRecord: {
          ...state.killRecord,
          [value]: null,
        },
      };
    }
    case "add-level": {
      return {
        ...state,
        level: value,
      };
    }
    case "add-moth": {
      return {
        ...state,
        ...value,
      };
    }
    case "spawn-enemies": {
      return {
        ...state,
        spawns: value,
      };
    }
    case "add-enemy": {
      return {
        ...state,
        enemies: [...state.enemies, value],
        enemyRecord: {
          ...state.enemyRecord,
          [value.id]: {
            ...value,
          },
        },
      };
    }
    case "update-enemy": {
      return {
        ...state,
        enemies: state.enemies.map((v) => {
          if (v.id === value.id) {
            return {
              ...v,
              ...value,
            };
          } else {
            return v;
          }
        }),
      };
    }
    case "add-enemies":
    case "update-enemies": {
      return {
        ...state,
        enemies: value,
      };
    }
    case "reset": {
      return {
        state,
        ...STATE,
        xp: state.xp,
      };
    }
    default: {
      console.error(type);
      throw new Error(`Action type invalid. ${type}`);
    }
  }
};
