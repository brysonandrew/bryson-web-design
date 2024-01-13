import { FC } from 'react';

export type TAppConfigContext = {
  Background: FC;
  BackgroundGlowCircle: FC;
};
export type TContext = TAppConfigContext & {
  isInit: boolean;
  onInit(): void;
};
