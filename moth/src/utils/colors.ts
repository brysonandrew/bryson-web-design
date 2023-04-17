import { Color } from "three";

export const resolveShade = (factor: number) =>
  new Color(`hsl(0, 0%, ${~~(factor * 100)}%)`);

export const resolveBlack = (factor: number) =>
  Number(`0x${0}`);
