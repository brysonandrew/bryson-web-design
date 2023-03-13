import { Fragment } from "react";
import type { TItem } from "./constants";
import { ITEMS } from "./constants";
import { Item } from "./Item";

export const Timeline = () => (
  <ul className="w-full">
    {ITEMS.map((item: TItem, index: number) => (
      <Fragment key={item.title}>
        {index !== 0 && <li className="py-2" />}
        <Item {...item} />
      </Fragment>
    ))}
  </ul>
);
