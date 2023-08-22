import { transform } from 'framer-motion';
import { usePosition } from './usePosition';
import { resolveFilter } from '@components/filters/resolveFilter';

export type TDepthConfig = {
  name: string | null;
  index: number;
  count: number;
  imageWidth: number;
  halfViewportWidth: number;
  viewportWidth: number;
};
export const useDepthStyle = (config: TDepthConfig) => {
  const position = usePosition(config);
  const { halfViewportWidth } = config;

  // const z = position.z;
  // const brightness = transform(
  //   [0, -halfViewportWidth],
  //   [100, 100],
  // )(z);
  // const blur = transform(
  //   [0, -halfViewportWidth],
  //   [0, 0],
  // )(z);
  // const filter = resolveFilter({
  //   blur,
  //   brightness,
  //   grayscale: 100,
  // });

  return {
    ...position,
    // filter,
  };
};
