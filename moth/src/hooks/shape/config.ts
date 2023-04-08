import { SVGPathData } from "svg-pathdata";
import type { Vector3 } from "three";

type TTypeKeyIndex =
  | 2
  | 1
  | 16
  | 4
  | 8
  | 128
  | 256
  | 32
  | 64
  | 512;
type TTypeKey = string | null;

export const resolveName = (index: TTypeKeyIndex): TTypeKey => Object.entries(SVGPathData).reduce(
    (next: TTypeKey, [key, value]) =>
      typeof value === "number" && value === index
        ? key
        : next,
    null,
  );

export type TPointTuple = [number, number, number?];
export type TPointsRecord = {
  line?: Vector3[];
  curve?: Vector3[];
};
