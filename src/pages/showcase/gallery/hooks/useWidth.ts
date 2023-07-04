import { useWindowSize } from "@hooks/useWindowSize";

const MAX_WIDTH = 700;

export const useWidth = () => {
  const windowSize = useWindowSize();
  const result = windowSize !== null && !windowSize.isResizing ? Math.min(MAX_WIDTH, windowSize.width) : 0;

  return result;
};
