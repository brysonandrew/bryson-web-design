import { Viewport } from "@react-three/fiber";
const OFFSET = 0.6;
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
  const d =
    viewport.width *
    (index / Math.max(1, count - 1)) *
    OFFSET;
  const offset = viewport.width * 0.5 * OFFSET;
  return d - offset;
};
