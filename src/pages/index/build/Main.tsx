import type { FC } from "react";
import { GENERIC_ITEMS } from "./constants";
import { Text } from "@components/text/Text";

type TProps = {
  index: number;
};
export const Main: FC<TProps> = ({ index }) => (
  <li className="absolute left-full top-0 uppercase whitespace-nowrap">
    <ul className="flex align-items justify-between w-full pl-10">
      {GENERIC_ITEMS[index]
        .split("")
        .map((letter, index) => (
          <li key={`letter-${index}`}>
            <Text>{letter}</Text>
          </li>
        ))}
    </ul>
  </li>
);
