
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
export const GLOW_BOX_SHADOW = "shadow-teal-02-sm";
export const DISABLED_BOX_SHADOW = 'shadow-gray-sm';

export const PARENT_GLOW_PROPS = {
  initial: false,
  animate: "animate",
  whileHover: "hover",
  exit: "exit",
};

export type TGlowConfigOptions = {
  text?: number;
  drop?: number;
  color?: TColorRgbKey;
};
export type TPartialGlowConfigOptions = Partial<TGlowConfigOptions>;
export const resolveGlowProps = ({ text = 0, drop = 0, color = "teal" }: TGlowConfigOptions) => ({
  variants: {
    animate: {
      opacity: 0,
      textShadow: resolveShadow(text, color),
      filter: resolveDropShadow(drop, color),
      transition: TEAL_GLOW_ANIMATE_TRANSITION
    },
    hover: {
      opacity: 1,
      transition: TEAL_GLOW_HOVER_TRANSITION
    },
  }
});
