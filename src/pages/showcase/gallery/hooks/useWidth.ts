import { useWindowSize } from "@hooks/useWindowSize";

const MAX_WIDTH = 600;

export const useWidth = () => {
  const windowSize = useWindowSize();
  const width = windowSize !== null ? Math.min(MAX_WIDTH, windowSize.width * 0.9) : 0;

  return { width, isResizing: Boolean(windowSize?.isResizing) };
};
