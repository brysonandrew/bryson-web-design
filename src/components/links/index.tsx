import { Text } from "@components/text";
import { Content } from "./Content";
import type { TItem } from "./constants";
import { ITEMS } from "./constants";
import { Item } from "./Item";

export const Links = () => (
  <>
    <Text>Links - </Text>
    <div className="py-2" />
    <ul className="flex justify-around">
      {ITEMS.map((item: TItem) => (
        <Item key={item.title}>
          <Content {...item} />
        </Item>
      ))}
    </ul>
    <div className="py-2" />
  </>
);
