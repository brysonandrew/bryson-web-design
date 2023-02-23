import type { FC } from "react";
import { Displacement, RESULT_ID } from "./Displacement";
import { TBaseNoiseProps } from "./config";
import { TChildren } from "@t/index";

type TProps = TBaseNoiseProps & {
  keyframes: number[];
  children(result: typeof RESULT_ID): TChildren;
};
export const Noise: FC<TProps> = ({
  keyframes,
  children,
  ...turbulenceTransition
}) => (
  <Displacement
    numOctaves={keyframes}
    {...turbulenceTransition}
  >
    {children}
  </Displacement>
);
