import { TLayoutComponentProps } from '@brysonandrew/app/config/types/layout';
import { LightBack } from './Back';
import { LightGlow } from './Glow';
import { LightMarker } from './Marker';

type TConfig = TLayoutComponentProps;
export const withLight = (config: TConfig) => {
  const Glow = LightGlow(config);
  const configWithGlow: TLayoutComponentProps = {
    ...config,
    Glow,
  }; 
  return {
    Glow,
    Back: LightBack(configWithGlow),
    Marker: LightMarker(configWithGlow),
  };
};

export type TWithLight = ReturnType<typeof withLight>;

export * from './Back';
export * from './Glow';
export * from './Marker';
