import { useWindowSize } from "@hooks/useWindowSize";

export const useWidth = () => {
  const windowSize = useWindowSize();
  const result = (windowSize?.width ?? 0) * 0.7;

  return result;
};