import { Text as _Text } from "@components/text/Text";
import clsx from "clsx";
import type { FC } from "react";
import type { TChildrenProps } from "./Motion";
import { GENERIC_ITEMS } from "./constants";

type TProps = Partial<TChildrenProps>;
export const Text: FC<TProps> = () => (
  <ul className="flex flex-col items-center py-12">
    {GENERIC_ITEMS.map((item) => (
      <li
        key={item}
        className={clsx("relative uppercase bg-black-06 p-6 lg:py-2.5 xl:py-3.5 m-1 whitespace-nowrap")}
      >
        <_Text style={{letterSpacing: 12}}>{item}</_Text>
      </li>
    ))}
  </ul>
);
