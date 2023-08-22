import { transform } from 'framer-motion';
import { useZ, RADIUS_Z } from './useZ';
import { resolveFilter } from '@components/filters/resolveFilter';
import { useX } from './useX';

export type TDepthConfig = {
  name: string | null;
  index: number;
  count: number;
};
export const useDepthStyle = (config: TDepthConfig) => {
  const xStyle = useX(config);
  const zStyle = useZ(config);

  const y = 0; // useY();
  const z = zStyle.z;
  const brightness = transform([0, RADIUS_Z], [70, 110])(z);
  const blur = transform([0, RADIUS_Z], [0.5, 0])(z);
  const filter = resolveFilter({
    blur,
    brightness,
    grayscale: 0,
  });

  return {
    ...xStyle,
    ...zStyle,
    y,
    filter,
  };
};
