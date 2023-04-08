import { useViewport } from "./useViewport";

export const useViewportHeight = () => {
  const viewport = useViewport();
  return viewport.height;
};
