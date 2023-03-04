import type { FC } from "react";
import { REVIEWS } from "./constants";
import { TextSm } from "../TextSm";

type TProps = {
  index: number;
};
export const Main: FC<TProps> = ({ index }) => (
  <li className="absolute left-full top-0 uppercase px-0 py-2 m-1 whitespace-nowrap">
    <ul>
      <li
        className="whitespace-normal"
        style={{ width: "calc(100vw - 100px)" }}
      >
        <TextSm>
          {REVIEWS[index].short} - {REVIEWS[index].source}
        </TextSm>
      </li>
    </ul>
  </li>
);
