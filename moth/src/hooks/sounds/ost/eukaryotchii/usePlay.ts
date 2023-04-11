import { useLoop } from "../../useLoop";
import { useBass } from "./useBass";
import { useDrone } from "./useDrone";

export const usePlay = () => {
  const drone = useDrone();
  const bass = useBass();
  const loop = useLoop({
    drones: [drone],
    pulses: [bass],
  });
  return loop;
};
