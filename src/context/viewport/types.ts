import { TViewport } from '@hooks/window/useViewport';

export type TContext = TViewport & { isFlipped: boolean };
