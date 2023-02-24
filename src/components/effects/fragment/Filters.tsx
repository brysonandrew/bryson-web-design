import type { FC } from "react";
import { FRAGMENT_ARR, FRAGMENT_RESULT, FRAGMENTS_RESULT } from "./config";
import { Filter } from "./Filter";

export const Filters: FC = () => (
  <>
    {FRAGMENT_ARR.map((_, index) => (
      <Filter key={`${index}`} index={index} />
    ))}
    <feMerge result={FRAGMENTS_RESULT}>
      {FRAGMENT_ARR.map((_, index) => (
        <feMergeNode
          key={`${index}`}
          in={`${FRAGMENT_RESULT}-${index}`}
        />
      ))}
    </feMerge>
  </>
);
 