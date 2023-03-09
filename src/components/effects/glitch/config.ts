export const GLOW_ID = "GLOW_ID";
export const GLITCH_FILTER_ID = "GLITCH_FILTER_ID";

export const GLITCH_SWEEPS_ID = "GLITCH_SWEEPS_ID";
export const GLITCH_FRAGMENTS_ID = "GLITCH_FRAGMENTS_ID";

export const IMAGE_WIDTH = 360;

export const WIDTH = 1920;
export const HEIGHT = 1080;

export const OVERHANG = 10;

export const WIDTH_AND_OVERHANG = WIDTH - OVERHANG * 2;
export const HEIGHT_AND_OVERHANG = HEIGHT - OVERHANG * 2;

const MIN_COUNT = 4;
const MAX_COUNT = 10;

const MAX_TOTAL = (MAX_COUNT + 2) * MAX_COUNT;

export const resolveRandomGlitch = () => {
  const count = ~~(
    Math.random() * MAX_COUNT +
    (MAX_COUNT - MIN_COUNT)
  );
  const keyframes = [
    0,
    ...[...Array(count)].map((_, i, { length }) => {
      let x = Math.sin(((i - 1) / length) * Math.PI);
      x *= MIN_COUNT + MAX_COUNT * Math.random();
      return parseInt(x.toFixed(0));
    }),
    0,
  ];

  return {
    keyframes,
    delay: Math.random() * 4 + 0.2,
    duration: Math.random() + 0.1,
    sweeps: [...Array(~~(Math.random() * 4))].map(
      (_) => Math.random() * 6,
    ),
  };
};

export const resolveRandomFragments = () =>
  [...Array(~~(MAX_TOTAL * Math.random()))].map((_) => {
    const width = Math.random() * 20;
    const x = (100 - width) * Math.random();

    const height = Math.random() * 20;
    const y = (100 - height) * Math.random();

    return {
      width,
      x,
      height,
      y,
    };
  });
