import { Morph } from "@components/background/morph";
import { Pattern } from "@components/background/pattern";
import { POOL_ID } from "@components/cursor";
import { Displacement } from "@components/effects/displacement";
import { Pool } from "@components/effects/pool";

export const Filters = () => (
  <svg width="0%" height="0%" viewBox="0 0 100 100">
    <Pool id={POOL_ID} intensity={10} />
    <Displacement />
    <Pattern />
    <Morph />
  </svg>
);
