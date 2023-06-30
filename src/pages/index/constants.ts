import { MOTION_CONFIG } from "@constants/animation";
import COLORS from "@windi/config-colors.json";

export const HEADER_OFFSET_Y = 240;

export const GAP_1 = 0; // 500;

export const GAP_2 = 0; // GAP_1 + 300;

export const FULL = ['0%', '-100%'];
export const DELAY = 24;
export const DELAY_2 = DELAY * 4;
export const DELTA = GAP_1 + DELAY_2;


export const WHITE_FILTER = {
  filter: 'grayscale(100%) brightness(400%)',
};

const resolveWhite = (opacity: number) => `rgba(255,255,255, ${opacity})`;
const resolveDropShadow = (spread: number) => `drop-shadow(0px 0px ${spread}px ${resolveWhite(0.8)})`;
const resolveTextShadow = (spread: number) => `1px 1px ${spread}px ${resolveWhite(0.5)}, 1px 1px ${spread}px ${resolveWhite(0.8)}`;

export const HOVER_GLOW_PROPS = {
  initial: false,
  animate: {
    filter: resolveDropShadow(0),
    textShadow: resolveTextShadow(0),
    transition: { ease: "linear", duration: 0.2, delay: 0.1 },
    color: COLORS["teal-bright"]
  },
  whileHover: {
    filter: resolveDropShadow(6),
    textShadow: resolveTextShadow(8),
    color: COLORS["baby-blue"]
  },
};

export const DELAY_VISIBILITY = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: {
    ...MOTION_CONFIG,
    delay: MOTION_CONFIG.transition.duration,
  },
};