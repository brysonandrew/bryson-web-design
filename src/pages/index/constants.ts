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

export const resolveWhite = (opacity: number) => `rgba(255,255,255, ${opacity})`;
export const resolveDropShadow = (spread: number) => `drop-shadow(0px 0px ${spread}px ${resolveWhite(0.8)})`;
export const resolveTextShadow = (spread: number) => `0px 0px ${spread}px ${resolveWhite(0.5)}, 0px 0px ${spread}px ${resolveWhite(0.8)}`;

type TConfig = {
  outerGlow: number;
  textGlow: number;
};
export const resolveHoverGlowProps = ({ outerGlow, textGlow }: TConfig) => ({
  initial: false,
  animate: {
    filter: resolveDropShadow(0),
    textShadow: resolveTextShadow(0),
    transition: { ease: "easeIn", duration: 0.28, delay: 0.08 },
    // color: COLORS["teal-bright"]
  },
  whileHover: {
    filter: resolveDropShadow(outerGlow),
    textShadow: resolveTextShadow(textGlow),
    // color: COLORS["baby-blue"],
    transition: { ease: "linear", duration: 0.2, delay: 0 },
  },
});

export const HOVER_GLOW_PROPS = resolveHoverGlowProps({ outerGlow: 8, textGlow: 10 });
export const HOVER_GLOW_PROPS_SM = resolveHoverGlowProps({ outerGlow: 4, textGlow: 1 });

export const DURATION_DELAY_TRANSITION = {
  transition: {
    ...MOTION_CONFIG,
    delay: MOTION_CONFIG.transition.duration,
  },
};

export const DELAY_VISIBILITY = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  ...DURATION_DELAY_TRANSITION
};