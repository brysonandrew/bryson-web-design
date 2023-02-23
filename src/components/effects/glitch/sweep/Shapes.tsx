import type { FC } from "react";
import { SWEEP_ARR } from "./config";
import { Shape as SweepShape } from "./Shape";

type TProps = { duration: number };
export const Shapes: FC<TProps> = ({ duration }) => (
  <>
    {SWEEP_ARR.map((_, index) => (
      <SweepShape
        key={`${index}`}
        index={index}
        duration={duration * index}
      />
    ))}
  </>
);
