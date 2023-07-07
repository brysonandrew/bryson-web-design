import clsx from "clsx";
import { isSafari } from "react-device-detect";

export const HEADER_OFFSET_Y = 240;

export const WHITE_FILTER = {
  filter: 'grayscale(100%) brightness(400%)',
};

export const COLOR_RGB_RECORD = {
  "white": "255,255,255",
  "gray": "68,68,68",
  "baby-blue": "153,204,255",
  "teal": "45,212,191",
  "teal-bright": "202,248,255",
};
export type TColorRgbKey = keyof typeof COLOR_RGB_RECORD;

export const resolveColor = (color: TColorRgbKey, opacity: number) => `rgba(${COLOR_RGB_RECORD[color]}, ${opacity})`;

export const resolveWhite = (opacity: number) => resolveColor("white", opacity);
export const resolveGray = (opacity: number) => resolveColor("gray", opacity);
export const resolveBabyBlue = (opacity: number) => resolveColor("baby-blue", opacity);
export const resolveTeal = (opacity: number) => resolveColor("teal", opacity);
export const resolveTealBright = (opacity: number) => resolveColor("teal-bright", opacity);

export const resolveDropShadow = (spread: number, color: TColorRgbKey = "white") => `drop-shadow(0px 0px ${spread}px ${resolveColor(color, 0.8)})`;
export const resolveShadow = (spread: number, color: TColorRgbKey = "white") => `0px 0px ${spread}px ${resolveWhite(0.5)}, 0px 0px ${spread}px ${resolveColor(color, 0.8)}`;

export const TEAL_GLOW_ANIMATE_TRANSITION = { ease: "easeIn", duration: 0.28, delay: 0.08 };
export const TEAL_GLOW_HOVER_TRANSITION = { ease: "linear", duration: 0.2, delay: 0 };

export const PARENT_HOVER_GLOW_PROPS = {
  initial: "initial",
  animate: "animate",
  whileHover: "hover",
  exit: "exit",
};

export type TTealGlowConfigOptions = {
  outerGlow: number;
  textGlow: number;
  color?: TColorRgbKey;
};
export const resolveHoverGlowProps = ({ outerGlow, textGlow, color }: TTealGlowConfigOptions) => ({
  variants: {
    animate: {
      opacity: 0,
      filter: resolveDropShadow(outerGlow, color),
      textShadow: resolveShadow(textGlow, color),
      transition: TEAL_GLOW_ANIMATE_TRANSITION
    },
    hover: {
      opacity: 1,
      transition: TEAL_GLOW_HOVER_TRANSITION
    },
  }
});

export const TEAL_GLOW_BOX_SHADOW = "shadow-teal-02-sm";
export type TPartialTealGlowConfigOptions = Partial<TTealGlowConfigOptions>;
export type TTealGlowConfig = {
  classValue?: string, partial?: TPartialTealGlowConfigOptions;
};
export const resolveTealGlow = (config: TTealGlowConfig = {}) => {
  const { classValue, partial } = config;
  return {
    className: clsx([!isSafari && TEAL_GLOW_BOX_SHADOW], classValue),
    ...resolveHoverGlowProps({ outerGlow: 2, textGlow: 2, color: "teal", ...partial })
  };
};

export const TEAL_GLOW = {
  variants: {
    hover: {
      filter: resolveDropShadow(20, 'teal'),
    },
    animate: {
      filter: resolveDropShadow(10, 'teal'),
    },
  },
};