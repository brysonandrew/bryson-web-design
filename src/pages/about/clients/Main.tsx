import type { FC } from "react";
import { GENERIC_ITEMS } from "./constants";
import { TextXl } from "@components/text/TextXl";

type TProps = {
  index: number;
};
export const Main: FC<TProps> = ({ index }) => (
  <li className="absolute left-full top-0 uppercase px-0 py-2 m-1 whitespace-nowrap">
    <ul className="flex align-items justify-between w-full">
      {GENERIC_ITEMS[index]
        .split("")
        .map((letter, index) => (
          <li key={`letter-${index}`}>
            <TextXl>{letter}</TextXl>
          </li>
        ))}
    </ul>
  </li>
);
