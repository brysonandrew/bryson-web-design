import { TMediaRecord } from "@t/media";
import { useMemo } from "react";

export const useSorted = (items: TMediaRecord[]) => {
  const results = useMemo(() => {
    return items.sort((a, b) => {
      const an = +a.png.name;
      const bn = +b.png.name;

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