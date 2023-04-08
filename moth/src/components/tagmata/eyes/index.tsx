import type { FC } from "react";
import { EyeLeft } from "./EyeLeft";
import { EyeRight } from "./EyeRight";
import type { TBaseTagmataProps } from "../types";

export const Eyes: FC<TBaseTagmataProps> = (props) => (
  <>
    <EyeLeft {...props} />
    <EyeRight {...props} />
  </>
);
