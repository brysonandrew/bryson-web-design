import { useWindowSize } from "@hooks/useWindowSize";

export const useWidth = () => {
  const windowSize = useWindowSize();
  const result = windowSize !== null && !windowSize.isResizing ? windowSize.width * 0.7 : 0;

  return result;
};
