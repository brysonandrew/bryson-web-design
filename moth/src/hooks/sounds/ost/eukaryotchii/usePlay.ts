import { useLoop } from "../../useLoop";
import { useBass } from "./useBass";
import { useDrone } from "./useDrone";
import { useKick } from "./useKick";

export const usePlay = () => {
  const drone = useDrone();
  const bass = useBass();
  const kick = useKick();
  const loop = useLoop({
    kicks: [null, kick, null, null],
    drones: [drone, drone, drone, drone],
    pulses: [bass, bass, bass, bass],
  });
  return loop;
};
