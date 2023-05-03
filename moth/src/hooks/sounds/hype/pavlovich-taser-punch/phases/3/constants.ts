const STEPS_COUNT = 1;
//const RUN = [40, 38, 43, 41, 45, 41, 40, 41];
const RUN = [40, 38, 41, 41];
const TRANSCRIBE = -12 * 5;
export const STEPS = [
  ...[...Array(STEPS_COUNT)]
    .map((_) => RUN.map((v) => v + TRANSCRIBE))
    .flat(),
  // ...[...Array(STEPS_COUNT)].map((v, i) =>
  //   i % 2 === 0 ? 1 : 0,
  // ),
];
