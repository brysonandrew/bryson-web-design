import type { FC } from "react";
import { Left } from "./Left";
import { Right } from "./Right";
import type { TBaseTagmataProps } from "@moth-components/tagmata/types";

export const Warlord: FC<TBaseTagmataProps> = (props) => (
  <>
    <Left {...props} />
    <Right {...props} />
  </>
);
