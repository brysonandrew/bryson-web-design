import { FC, Fragment } from "react";
import { Text } from "@components/text";
import type { TItem } from "./constants";
import { ITEMS } from "./constants";
import { Item } from "./Item";
import { Plus } from "./Plus";
import { TChildren } from "@t/index";
const TEXT_CLASS =
  "absolute right-full whitespace-nowrap -translate-x-12";

type TProps = {
  children: TChildren;
};
export const Tech: FC<TProps> = ({ children }) => (
  <>
    <div className="relative flex items-center justify-center">
      <Text classValue={TEXT_CLASS}>I use</Text>
      {/* <div className="px-2" /> */}
      <ul className="flex items-center justify-evenly w-full">
        {ITEMS.map((item: TItem, index: number) => (
          <Fragment key={item.title}>
            {index !== 0 && <Plus />}
            <li>
              <Item {...item} />
            </li>
          </Fragment>
        ))}
      </ul>
    </div>

    <div className="py-6" />
    <div className="relative flex items-start">
      <Text classValue={TEXT_CLASS}>To make</Text>
      {children}
    </div>
  </>
);
