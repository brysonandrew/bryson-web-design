import { useWindowSize } from "@hooks/useWindowSize";

const MAX_WIDTH = 800;

export const useWidth = () => {
  const windowSize = useWindowSize();
  const screen = windowSize !== null ? windowSize.width : 0;
  const footer = Math.min(MAX_WIDTH, screen * 0.9);

  return { width: { footer, screen }, isResizing: Boolean(windowSize?.isResizing) };
};
