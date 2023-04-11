import { useLoop } from "../../useLoop";
import { useBass } from "./useBass";

export const usePlay = () => {
  const bass = useBass();
  const loop = useLoop({
    pulses: [bass],
    drones: []
  });
  return loop;
};
