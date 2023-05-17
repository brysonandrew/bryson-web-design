import { APP_ITEMS } from "@constants/apps";
import { Fragment } from "react";
import { Item } from "./Item";
import { TItem } from "@t/showcase";

export const Experience = () => (
  <div>
    <ul>
      {APP_ITEMS.map((item: TItem, index) => (
        <Fragment>
          {index !== 0 && <li className="py-2" />}
          <Item key={item.title} {...item} />
        </Fragment>
      ))}
    </ul>
  </div>
);
