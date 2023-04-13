import { INTERVAL } from "../constants";
import { useLoop } from "../../../../useLoop";
import { usePhases } from "./usePhases";

export const usePlay = () => {
  const phases = usePhases();

  const loop = useLoop({
    interval: INTERVAL,
    phases,
  });

  return loop;
};
