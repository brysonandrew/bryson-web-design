import { useWindowSize } from "@hooks/window/useWindowSize";

const MAX_WIDTH = 800;

export const useWidth = () => {
  const { width: screen, isResizing } = useWindowSize();
  const footer = Math.min(MAX_WIDTH, screen * 0.9);

  return { width: { footer, screen }, isResizing: Boolean(isResizing) };
};
