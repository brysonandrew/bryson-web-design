import type { Viewport } from "@react-three/fiber";
const TIGHTNESS_OFFSET = 0.7;
type TResolveXConfig = {
  viewport: Viewport;
  count: number;
  index: number;
};
export const resolveX = ({
  viewport,
  count,
  index,
}: TResolveXConfig) => {
  const originX = viewport.width * 0.5;
  const span = viewport.width * TIGHTNESS_OFFSET;
  const margin = viewport.width * (1 - TIGHTNESS_OFFSET);
  const margin05 = margin * 0.5;
  const division = span / count;

  const result =
    margin05 +
    division * (index + 1) -
    division * 0.5 -
    originX;
  return result;
};
