import type { FC } from "react";
import { Shape as SweepShape } from "./Shape";

type TProps = { items: number[] };
export const Shapes: FC<TProps> = ({ items }) => (
  <>
    {items.map((duration, index) => (
      <SweepShape
        key={`${index}`}
        index={index}
        duration={duration}
      />
    ))}
  </>
);
