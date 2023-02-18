import { useMemo } from "react";
import type { TBaseChildren, TChildren } from "@t/index";

export type TItemsConfig = {
  wip: TChildren;
  acc?: TBaseChildren[];
};
const resolveItems = ({ wip }: TItemsConfig) => {
  if (wip === null) {
    return [];
  }
  if (typeof wip === "string") {
    return [...wip];
  }
  if (!Array.isArray(wip)) return [wip];
  const result = wip.reduce(
    (a: TBaseChildren[], c: TChildren) => {
      if (typeof c === "string" || Array.isArray(c)) {
        a = [...a, ...c];
      } else {
        a = [...a, c];
      }
      return a;
    },
    [],
  );
  return result;
};

export const useItems = ({ wip }: TItemsConfig) => {
  const items = useMemo(() => resolveItems({ wip }), []);

  return items;
};
