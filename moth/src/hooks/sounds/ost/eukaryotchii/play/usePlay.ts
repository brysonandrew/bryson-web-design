import { useLoop } from "../../../_useLoop";
import { useBass } from "../sounds/useBass";
import { useDrone } from "../sounds/useDrone";
import { useKick } from "../sounds/useKick";

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
