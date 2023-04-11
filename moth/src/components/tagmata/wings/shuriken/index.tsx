import type { TBaseTagmataProps } from "@moth-components/tagmata/types";
import type { FC } from "react";
import { Blade } from "./Blade";
import { Blade1 } from "./Blade1";
import { Blade2 } from "./Blade2";
import {
  BLADES_NAME,
  BLADE_1_NAME,
  BLADE_2_NAME,
  BLADE_NAME,
} from "./constants";
export const Shuriken: FC<TBaseTagmataProps> = (props) => (
    <group name={BLADES_NAME} >
      <Blade name={BLADE_NAME} {...props} />
      <Blade1 name={BLADE_1_NAME} {...props} />
      <Blade2 name={BLADE_2_NAME} {...props} />
    </group>
  );
