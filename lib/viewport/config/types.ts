import { TViewport } from "../use-measure";

export type TContext = TViewport & { halfWidth: number, halfHeight: number, isVertical: boolean };
