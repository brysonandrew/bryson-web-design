import { useFrame } from "@react-three/fiber";
import { useMothContext } from "@moth-state/Context";
import { useRef } from "react";
import { useTriggerSpawn } from "./useTriggerSpawn";
import { HEIGHT, SPAWN_ENEMIES } from "@moth-components/level/LighthouseCaptain/constants";

type TProgressRecord = Record<string, true>;

export const useSpawn = () => {
  const { level } = useMothContext();
  const progressRef = useRef<TProgressRecord>({});
  const handleTriggerSpawn = useTriggerSpawn();

  useFrame(() => {
    SPAWN_ENEMIES.forEach((spawnPoint) => {
      if (
        !level?.position ||
        progressRef.current[spawnPoint.progressId]
      )
        return;

      if (
        -level.position.y >
        HEIGHT * spawnPoint.threshold
      ) {
        progressRef.current[spawnPoint.progressId] = true;
        handleTriggerSpawn(spawnPoint);
      }
    });
  });
};
