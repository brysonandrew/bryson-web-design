import { TLayoutComponentProps } from '@brysonandrew/app/layout/types';
import { Marker as _Marker } from './Marker';
import { Back as _Back } from './Back';
import { Glow } from './Glow';

type TConfig = TLayoutComponentProps;
export const withGlow = (props: TConfig) => {
  const Shell = Glow(props);

  props = { ...props, Glow: Shell };
  const Back = _Back(props);
  const Marker = _Marker(props);
  return {
    Shell,
    Back,
    Marker,
  };
};
