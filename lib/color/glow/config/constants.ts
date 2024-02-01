import { BASE_RGB } from "@brysonandrew/color/main/config/constants";
import { resolveGlowRecord } from "@brysonandrew/color/glow/resolveGlowRecord";

export const BASE_GLOW_RECORD =
  resolveGlowRecord<typeof BASE_RGB>(BASE_RGB);
