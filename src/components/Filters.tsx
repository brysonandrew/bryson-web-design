import { Morph } from "@components/background/morph";
import { Pattern } from "@components/background/pattern";
import { POOL_ID } from "@components/cursor";
import { Displacement } from "@components/effects/displacement";
import { Pool } from "@components/effects/pool";
import { FilterShell } from "./FilterShell";

export const Filters = () => (
  <FilterShell>
    <Pool id={POOL_ID} intensity={10} />
    <Displacement />
    <Pattern />
    <Morph />
  </FilterShell>
);
