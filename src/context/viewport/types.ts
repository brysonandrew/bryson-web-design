import { TViewport } from '@hooks/window/useViewport';

export type TContext = TViewport & { halfWidth: number, halfHeight: number, isVertical: boolean };
