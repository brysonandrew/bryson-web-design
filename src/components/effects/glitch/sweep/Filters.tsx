import type { FC } from "react";
import {
  SWEEPS_RESULT,
  SWEEP_ARR,
  SWEEP_RESULT,
} from "./config";
import { Filter } from "./Filter";

export const Filters: FC = () => (
  <>
    {SWEEP_ARR.map((_, index) => (
      <Filter key={`${index}`} index={index} />
    ))}
    <feMerge result={SWEEPS_RESULT}>
      {SWEEP_ARR.map((_, index) => (
        <feMergeNode
          key={`${index}`}
          in={`${SWEEP_RESULT}-${index}`}
        />
      ))}
    </feMerge>
  </>
);
