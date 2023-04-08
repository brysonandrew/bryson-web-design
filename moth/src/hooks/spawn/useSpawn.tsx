import { HEIGHT } from "@constants/index";
import { useFrame } from "@react-three/fiber";
import { useMothContext } from "@state/Context";
import { useRef } from "react";
import { SPAWN_POINTS } from "../../components/level/0/constants";
import { useTriggerSpawn } from "./useTriggerSpawn";

type TProgressRecord = Record<string, true>;

export const useSpawn = () => {
  const { level } = useMothContext();
  const progressRef = useRef<TProgressRecord>({});
  const height = HEIGHT;
  const handleTriggerSpawn = useTriggerSpawn();

  useFrame(() => {
    SPAWN_POINTS.forEach((spawnPoint) => {
      if (
        !level?.position ||
        progressRef.current[spawnPoint.name]
      )
        return;
      if (
        -level.position.y >
        height * spawnPoint.threshold
      ) {
        progressRef.current[spawnPoint.name] = true;
        handleTriggerSpawn(spawnPoint);
      }
    });
  });
};
