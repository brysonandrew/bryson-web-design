import { Fragment } from "react";
import type { TItem } from "../../src/constants/showcase";
import { APP_ITEMS } from "../../src/constants/showcase";
import { Item } from "./Item";

export const Timeline = () => (
  <ul className="w-full">
    {APP_ITEMS.map((item: TItem, index: number) => (
      <Fragment key={item.title}>
        {index !== 0 && <li className="py-2" />}
        <Item {...item} />
      </Fragment>
    ))}
  </ul>
);
