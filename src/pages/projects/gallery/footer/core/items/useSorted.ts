import { TMedia } from "@t/media";
import { TImageRecordEntries } from "@t/screens";
import { useMemo } from "react";

export const useSorted = (items: TImageRecordEntries) => {
  const results = useMemo(() => {
    return items.sort(([_, a], [__, b]) => {
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