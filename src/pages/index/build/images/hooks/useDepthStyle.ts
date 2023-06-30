import { transform } from "framer-motion";
import { useY, RANGE_MIN_Y } from "./useY";
import { useZ, RANGE_Z } from "./useZ";
import { resolveFilter } from "./resolveFilter";

type TConfig = {
  index: number;
  count: number;
};
export const useDepthStyle = ({ index, count }: TConfig) => {
  const y = useY(index);
  const z = useZ(index);
  const brightness = transform(
    [-RANGE_Z * 2 - RANGE_MIN_Y * count, -RANGE_Z * 1.5],
    [10, 110],
  )(z);
  const blur = transform(
    [-RANGE_Z * 1.5 - RANGE_MIN_Y * count, -RANGE_Z * 1.5],
    [2, 0],
  )(z);
  const filter = resolveFilter({ blur, brightness, grayscale: 100 });

  return {
    x: `-${50 * index}%`,
    y,
    z,
    filter,
    originX: '50%',
    originY: '100%',
  };
};