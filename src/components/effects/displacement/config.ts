import type {
  Transition,
  SVGMotionProps,
} from "framer-motion";

type TTransition = Pick<
  Transition,
  "repeat" | "repeatDelay" | "repeatType" | "delay"
>;
type TTurbulance = Omit<
  SVGMotionProps<SVGFETurbulenceElement>,
  "children" | "result"
> & {
  baseFrequency?: number | `${number} ${number}`;
};
export type TDisplacementProps = TTurbulance & {
  intensity?: number;
  filterId?: string;
};
export const INTENSITY = 180;

export const TRANSITION_DEFAULTS: TTransition = {
  repeat: Infinity,
};

export const TURBULANCE_DEFAULTS: TTurbulance = {
  baseFrequency: "0 0.4",
  numOctaves: 1,
};
