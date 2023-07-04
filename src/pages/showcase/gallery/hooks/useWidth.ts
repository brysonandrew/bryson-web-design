import { useWindowSize } from "@hooks/useWindowSize";
import WIDTH from "@windi/config-width.json";

const MAX_WIDTH = 280;

export const useWidth = () => {
  const windowSize = useWindowSize();
  const width = windowSize !== null ? Math.min(MAX_WIDTH, windowSize.width * 0.4) : 0;
  return { width, isResizing: Boolean(windowSize?.isResizing) };
};
