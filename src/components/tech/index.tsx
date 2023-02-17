import { Fragment } from "react";
import { Sub } from "@components/Sub";
import type { TItem } from "./constants";
import { ITEMS } from "./constants";
import { Content } from "./Content";
import { Item } from "./Item";
import { Plus } from "./Plus";

export const Tech = () => (
  <>
    <Sub>Core Tech Stack - </Sub>
    <div className="py-2" />
    <ul className="flex items-center justify-evenly">
      {ITEMS.map((item: TItem, index: number) => (
        <Fragment key={item.title}>
          {index !== 0 && <Plus />}
          <Item>
            <Content {...item} />
          </Item>
        </Fragment>
      ))}
    </ul>
  </>
);
