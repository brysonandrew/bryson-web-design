import { useThree } from "@react-three/fiber";

export const useViewport = () => {
  const viewport = useThree((state) => state.viewport);
  return viewport;
};
