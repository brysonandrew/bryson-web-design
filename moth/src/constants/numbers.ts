export const NUMBERS = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
] as const;
export type TNumberKey = (typeof NUMBERS)[number];
export const resolveNumber = (value: string) => {
  const n = +value;
  if (isNaN(n)) {
    return NUMBERS.indexOf(value as TNumberKey);
  } else {
    return n;
  }
};
