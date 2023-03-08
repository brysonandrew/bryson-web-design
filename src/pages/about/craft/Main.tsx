import type { FC } from "react";
import { REVIEWS } from "./constants";
import { TextSm } from "../TextSm";

type TProps = {
  index: number;
};
export const Main: FC<TProps> = ({ index }) => (
  <li className="absolute left-full top-0 uppercase px-0 py-2 m-1 whitespace-nowrap">
    <ul>
      <li className="whitespace-normal w-mid">
        <TextSm>
          <span className="text-gray">
            {REVIEWS[index].short}
          </span>
          <>
            <span> - </span>
            <span className="text-tealytytt4`">{REVIEWS[index].source}</span>
          </>
        </TextSm>
      </li>
    </ul>
  </li>
);
