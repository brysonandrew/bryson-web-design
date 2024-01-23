import { TViewport } from "../useMeasure";

export type TContext = TViewport & { halfWidth: number, halfHeight: number, isVertical: boolean };
