import { CV_ITEMS } from "@constants/apps";
import { Item } from "./Item";
import { TItem } from "@t/showcase";

export const Experience = () => (
  <ul>
    {CV_ITEMS.map((item: TItem, index) => (
      <Item key={item.title} {...item} index={index} />
    ))}
  </ul>
);
