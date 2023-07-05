import { TMedia } from "@pages/showcase/config";

export const resolveSorted = (items: TMedia[]) => {
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
};