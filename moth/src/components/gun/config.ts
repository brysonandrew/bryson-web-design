import type { TLevel } from "@moth-components/level/config";

export type TShot = { name: string; x: number; y: number };
export type TPassedLevelProps = Pick<TLevel, "y">;
export const FIRING_RATE = 2;