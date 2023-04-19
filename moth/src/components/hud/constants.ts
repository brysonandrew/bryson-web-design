import { LIGHTHOUSE_CAPTAIN_KEY } from "@moth-components/enemies/bosses/lighthouse-captain/constants";

export const HUD_STYLES = {
  height: 5,
  width: 100,
  padding: 0.4,
};

export const COUNTER_WIDTH = HUD_STYLES.width - HUD_STYLES.padding * 4;

export const BOSSES = [LIGHTHOUSE_CAPTAIN_KEY] as const;
export type TBossKey = (typeof BOSSES)[number];
