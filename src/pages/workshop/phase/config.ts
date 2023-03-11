export const GLITCH_ID = "_GLITCH_ID";
export const GLITCH_WITH_LINE_ID = "_GLITCH_WITH_LINE_ID";
export const GLITCH_LINE_ID = "_GLITCH_LINE_ID";

export const GLITCH_GREEN_ID = "_GLITCH_GREEN_ID";

export const PATTERN_ID = "_PATTERN_ID";

export const IMAGE_WIDTH = 280;
export const IMAGE_HEIGHT = 280;

export const WIDTH = 600;
export const HEIGHT = 400;

export const OVERHANG = 10;

export const WIDTH_AND_OVERHANG = WIDTH - OVERHANG * 2;
export const HEIGHT_AND_OVERHANG = HEIGHT - OVERHANG * 2;

export const resolveRandomGlitch = () => {
  const count = ~~(Math.random() * 6) + 4;
  return {
    keyframes: [
      0,
      ...[...Array(count)].map((_, i, { length }) => {
        let x = Math.sin(((i - 1) / length) * Math.PI);
        x *= 5 * Math.random();
        x = parseInt(x.toFixed(0));
        x = Math.abs(x);
        return x;
      }),
      0,
    ],
    delay: Math.random() * 4 + 0.2,
    duration: Math.random() + 0.1,
  };
};
