import { useViewportWidth } from "@moth-hooks/useViewportWidth";

export const useBounds = (origin = 0) => {
  const viewportWidth = useViewportWidth();
  const viewportWidth06 = viewportWidth * 0.6 + origin;
  const viewportWidth05 = viewportWidth * 0.5 + origin;
  const viewportWidth04 = viewportWidth * 0.4 + origin;

  const handler = (n: number) => {
    if (n > viewportWidth06) {
      return -4;
    }
    if (n < -viewportWidth06) {
      return 4;
    }
    if (n > viewportWidth05) {
      return -2;
    }
    if (n < -viewportWidth05) {
      return 2;
    }
    if (n > viewportWidth04) {
      return -1;
    }
    if (n < -viewportWidth04) {
      return 1;
    }
    return 0;
  };

  return handler;
};
