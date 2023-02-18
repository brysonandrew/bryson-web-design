import type { FC } from "react";
import { Fragment } from "react";
import { Text } from "@components/text";
import type { TItem } from "./constants";
import { ITEMS } from "./constants";
import { Item } from "./Item";
import { Plus } from "./Plus";
import type { TBaseChildren, TChildren } from "@t/index";
import { Typewriter } from "@components/typewriter";
const TEXT_CLASS =
  "absolute right-full whitespace-nowrap -translate-x-12";

const renderItems = (
  item: TBaseChildren,
  index: number,
) => {
  if (typeof item === "string") {
    return (
      <Text key={`${index}`} classValue={TEXT_CLASS}>
        {item}
      </Text>
    );
  }

  return <Fragment key={`${index}`}>{item}</Fragment>;
};

type TProps = {
  children: TBaseChildren;
};
export const Tech: FC<TProps> = ({ children }) => (
  <div className="relative flex flex-col">
    <div className="relative flex items-center justify-between w-full">
      <Typewriter
        delay={2000}
        wip={[
          "I use",
          <div className="px-2" />,
          <ul className="flex items-center justify-evenly w-full">
            {ITEMS.map((item: TItem, index: number) => (
              <Fragment key={item.title}>
                {index !== 0 && <Plus />}
                <Item {...item} />
              </Fragment>
            ))}
          </ul>,
        ]}
      >
        {(items) => items.map(renderItems)}
      </Typewriter>
    </div>
    <div className="py-8" />
    <div className="relative flex items-start">
      <Typewriter delay={2600} wip={["To make", children]}>
        {(items) => items.map(renderItems)}
      </Typewriter>
    </div>
  </div>
);
