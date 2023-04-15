export const HEIGHT = 5;
export const WIDTH = 100;
export const PADDING = 0.4;

export const COUNTER_WIDTH = WIDTH - PADDING * 4;

export const RIVER_HORSE_KEY = "RIVER_HORSE_KEY";
export const BOSSES = [RIVER_HORSE_KEY] as const;
export type TBossKey = (typeof BOSSES)[number];
