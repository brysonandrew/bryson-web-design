import type { Transition } from "framer-motion";
import type { SVGProps } from "react";

type TTransition = Pick<
  Transition,
  "repeat" | "repeatDelay" | "repeatType" | "delay"
>;
type TTurbulance = Omit<
  SVGProps<SVGFETurbulenceElement>,
  "children" | "result"
> & {
  baseFrequency?: number | `${number} ${number}`;
};
export type TDisplacementProps = TTurbulance & {
  intensity?: number;
  id?: string;
  begin?: number;
};
export const INTENSITY = 180;

export const TRANSITION_DEFAULTS: TTransition = {
  repeat: Infinity,
};

export const TURBULANCE_DEFAULTS: TTurbulance = {
  baseFrequency: "0 0.4",
  numOctaves: 1,
};
