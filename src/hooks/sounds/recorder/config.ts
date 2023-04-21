export type TVariant = MediaRecorder["state"];

export type TRecorderState = {
  arrayBuffer: ArrayBuffer | null;
  audioUrl: string | null;
  variant: TVariant | null;
};

export const INIT_STATE: TRecorderState = {
  arrayBuffer: null,
  audioUrl: null,
  variant: null,
};
import type { HTMLMotionProps } from "framer-motion";
import COLORS from "@windi/config-colors.json";

export const RECORDER_ICON_ANIMATION: Record<
  TVariant,
  HTMLMotionProps<"i">
> = {
  recording: {
    animate: {
      backgroundColor: COLORS["red"],
      opacity: [1, 0.5, 1],
      scale: [1, 0.9, 1],
    },
    exit: { opacity: 0 },
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0.5,
      repeatType: "mirror",
    },
  },
  inactive: {
    animate: {
      backgroundColor: COLORS["gray"],
      opacity: 1,
    },
  },
  paused: {
    animate: {
      backgroundColor: COLORS["blue"],
      opacity: 1,
    },
  },
};
