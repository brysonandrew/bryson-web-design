import { useViewport } from "./useViewport";

export const useViewportWidth = () => {
  const viewport = useViewport();
  return viewport.width;
};
