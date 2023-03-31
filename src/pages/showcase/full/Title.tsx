import { TextSm } from "@components/text/TextSm";
import { kebabToTitle } from "@utils/format";
import type { FC } from "react";
import { HEADER_SIZE } from "./gallery/sections/constants";

type TProps = {
  children: string;
};
export const Title: FC<TProps> = ({ children }) => (
    <div
      className="absolute left-9 top-10 flex items-center justify-between z-10 lg:left-18"
      style={{ height: HEADER_SIZE }}
    >
      <TextSm>{kebabToTitle(children)}</TextSm>
    </div>
  );
