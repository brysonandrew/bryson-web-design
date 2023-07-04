import { useWindowSize } from "@hooks/useWindowSize";
import WIDTH from "@windi/config-width.json";

const MAX_WIDTH = 700;

export const useWidth = () => {
  const windowSize = useWindowSize();
  const width = windowSize !== null ? Math.min(MAX_WIDTH, windowSize.width) : 0;
  return { width, isResizing: Boolean(windowSize?.isResizing) };
};
