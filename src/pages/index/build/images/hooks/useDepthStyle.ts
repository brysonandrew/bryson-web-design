import { transform } from "framer-motion";
import { useY } from "./useY";
import { useZ, RANGE_Z } from "./useZ";
import { resolveFilter } from "../../../../../components/filters/resolveFilter";

export const useDepthStyle = () => {
  const y = useY();
  const z = useZ(y);
  const brightness = transform(
    [0, RANGE_Z],
    [10, 110],
  )(z);
  const blur = transform(
    [0, RANGE_Z],
    [2, 0],
  )(z);
  const filter = resolveFilter({ blur, brightness, grayscale: 100 });

  return {
    y,
    z,
    zIndex: z,
    filter,
  };
};