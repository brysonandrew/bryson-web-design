import { TMedia } from "@pages/showcase/config";
import { useMemo } from "react";

export const useSorted = (items: TMedia[]) => {
  const results = useMemo(() => {
    return items.sort((a, b) => {
      const an = +a.img;
      const bn = +b.img;

      if (an < bn) {
        return -1;
      }
      if (bn < an) {
        return 1;
      }
      return 0;
    });
  }, [items]);
  return results;

};