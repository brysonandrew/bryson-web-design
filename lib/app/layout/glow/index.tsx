import { TLayoutComponentProps } from '@brysonandrew/app/layout/types';
import { Marker as _Marker } from './Marker';
import { Back as _Back } from './Back';
import { Glow } from './Glow';

type TConfig = TLayoutComponentProps;
export const resolveGlow = (props: TConfig) => {
  const Shell = Glow(props);
  console.log(Shell);
  console.log(<Shell />);

  props = { ...props, Glow: Shell };
  const Back = _Back(props);
  const Marker = _Marker(props);
  return {
    Shell,
    Back,
    Marker,
  };
};
