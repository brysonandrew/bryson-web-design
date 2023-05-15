import { Morph } from "@components/background/morph";
import { Pattern } from "@components/background/pattern";
// import { POOL_ID } from "@components/cursor";
// import {
//   Displacement,
//   ID as DISPLACEMENT_ID,
// } from "@components/effects/displacement";
// import { Pool } from "@components/effects/pool";
import { FilterShell } from "./FilterShell";

export const LOGO_SUFFIX = "LOGO";
export const TITLE_SUFFIX = "TITLE";
export const MUGSHOT_SUFFIX = "MUGSHOT";

// export const DISPLACEMENT_IDS = [
//   LOGO_SUFFIX,
//   TITLE_SUFFIX,
//   MUGSHOT_SUFFIX,
// ];

export const Filters = () => (
  <FilterShell>
    {/* <Pool id={POOL_ID} intensity={10} /> */}
    {/* <>
      {DISPLACEMENT_IDS.map((suffix, index) => (
        <Displacement
          key={`index-${index}`}
          id={`${DISPLACEMENT_ID}_${suffix}`}
          begin={index * 4 * Math.random()}
          intensity={80}
        />
      ))}
    </> */}
    <Pattern />
    <Morph />
  </FilterShell>
);
