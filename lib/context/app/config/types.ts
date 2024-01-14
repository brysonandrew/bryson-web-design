import { FC } from 'react';

export type TAppConfigContext = {
  Background: FC;
  BackgroundGlowCircle: FC;
  BackgroundGlow: FC;
  BackgroundGlow1: FC;
};
export type TContext = TAppConfigContext & {
  isInit: boolean;
  onInit(): void;
};
