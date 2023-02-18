export const GLITCH_ID = "_GLITCH_ID";
export const PATTERN_ID = "_PATTERN_ID";

export const IMAGE_WIDTH = 360;

export const WIDTH = 600;
export const HEIGHT = 280;

export const resolveRandomGlitch = () => {
  const count = ~~(Math.random() * 6) + 4;
  return {
    keyframes: [
      0,
      ...[...Array(count)].map((_, i, { length }) => {
        let x = Math.sin(((i - 1) / length) * Math.PI);
        x *= 10 * Math.random();
        return parseInt(x.toFixed(0));
      }),
      0,
    ],
    delay: Math.random() * 4 + 0.2,
    duration: Math.random() + 0.1,
  };
};
