export const VOICE_STATE = [
  "idle",
  "ready",
  "receiving",
  "no-match",
  "ended",
  "error",
] as const;

export type TVoiceStateKey = (typeof VOICE_STATE)[number];

export const CIRCLE_CLASS = "bg-blue-08 rounded-full";
