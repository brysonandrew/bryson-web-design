import { Orchestration, Keyframes, MotionValue } from "framer-motion";

export type TTransition = Orchestration | Keyframes;

export type TMotionValuePair = [
  x: MotionValue,
  y: MotionValue,
];
