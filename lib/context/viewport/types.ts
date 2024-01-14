import { TViewport } from '@lib/hooks/window/useViewport';

export type TContext = TViewport & { halfWidth: number, halfHeight: number, isVertical: boolean };
