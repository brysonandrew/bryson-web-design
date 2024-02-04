import { TLayoutComponentProps } from '@brysonandrew/app/layout/types';
import { Marker as _Marker } from './Marker';
import { Back as _Back } from './Back';
import { Glow as _Glow } from './Glow';

type TConfig = TLayoutComponentProps;
export const withLight = (config: TConfig) => {
  const Glow = _Glow(config);
  const configWithGlow: TLayoutComponentProps = {
    ...config,
    Glow, 
  };
  return {
    Glow,
    Back: _Back(configWithGlow),
    Marker: _Marker(configWithGlow),
  };
};
