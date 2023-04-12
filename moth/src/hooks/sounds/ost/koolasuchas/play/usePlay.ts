import { useLoop } from "../../../useLoop";
import { useBass } from "../sounds/useBass";

export const usePlay = () => {
  const bass = useBass();
  const loop = useLoop({
    pulses: [bass],
    drones: []
  });
  return loop;
};
