import { useLoop } from "../../../_useLoop";
import { useBass } from "../sounds/useBass";

export const usePlay = () => {
  const bass = useBass();
  const loop = useLoop({
    pulses: [bass],
    drones: []
  });
  return loop;
};
