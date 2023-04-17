import { LIGHTHOUSE_CAPTAIN_KEY } from "@moth-components/enemies/bosses/lighthouse-captain/constants";

export const HEIGHT = 5;
export const WIDTH = 100;
export const PADDING = 0.4;

export const COUNTER_WIDTH = WIDTH - PADDING * 4;

export const BOSSES = [LIGHTHOUSE_CAPTAIN_KEY] as const;
export type TBossKey = (typeof BOSSES)[number];
