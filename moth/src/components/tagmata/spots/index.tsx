import type { FC } from "react";
import { SpotLeft } from "./SpotLeft";
import { SpotRight } from "./SpotRight";
import type { TBaseTagmataProps } from "../types";

export const Spots: FC<TBaseTagmataProps> = (props) => (
  <>
    <SpotLeft {...props} />
    <SpotRight {...props} />
  </>
);
