import type { FC } from "react";
import {
  SWEEPS_RESULT,
  SWEEP_ARR,
  SWEEP_RESULT,
} from "./config";
import { Filter } from "./Filter";
import type { TFilterProps } from "../types";

type TProps = TFilterProps & {
  items?: number[];
};
export const Filters: FC<TProps> = ({
  id,
  source = id,
  result = id,
  items = SWEEP_ARR,
  children,
}) => (
  <>
    {items.map((_, index) => (
      <Filter
        key={`${index}`}
        index={index}
        source={source}
      />
    ))}
    <feMerge result={result}>
      {SWEEP_ARR.map((_, index) => (
        <feMergeNode
          key={`${index}`}
          in={`${SWEEP_RESULT}-${index}`}
        />
      ))}
    </feMerge>
    {children && children(result)}
  </>
);
