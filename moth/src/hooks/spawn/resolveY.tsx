import type { Viewport } from "@react-three/fiber";
const OFFSET = 0.6;
type TResolveXConfig = {
  viewport: Viewport;
  count: number;
  index: number;
};
export const resolveY = ({
  viewport,
  count,
  index,
}: TResolveXConfig) => {
  const d =
    viewport.height *
    (index / Math.max(1, count - 1)) *
    OFFSET *
    Math.random();
  const offset =
    viewport.height * 0.5 * OFFSET +
    index * d * 0.5 * Math.random();
  const result = d - offset;

  return result;
};
