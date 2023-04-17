import { Viewport } from "@react-three/fiber";
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
  // const d = viewport.height * (index / (count - 1)) * OFFSET;
  // const offset = viewport.height * 0.5 * OFFSET;
  // return d - offset;
  return index % 2 === 0 ? 0 : viewport.height * 0.1;
};
