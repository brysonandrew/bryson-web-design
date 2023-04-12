import { useMothContext } from "@moth-state/Context";
import { useEffect, useRef } from "react";
import {
  BEATS,
  BEATS_COUNT,
  BEAT_DURATION,
} from "./constants";

type TDrone = {
  play(): void;
  stop(): void;
};

type TPulse = {
  play(startTime: number): void;
  stop(): void;
};

type TConfig = {
  drones: TDrone[];
  pulses: TPulse[];
};
export const useLoop = ({ drones, pulses }: TConfig) => {
  const { context, isSound } = useMothContext();

  const intervalRef = useRef<ReturnType<
    typeof setInterval
  > | null>(null);

  const endInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const bassLoop = () => {
    BEATS.forEach((beat, index) => { 
      if (beat === 1) {
        const startTime =
          context.currentTime +
          (index * 1000) / BEAT_DURATION / BEATS_COUNT;
        pulses.forEach((pulse) => {
          pulse.play(startTime);
        });
      }
    });
  };

  const handler = async () => {
    endInterval();
    if (!isSound) return;
    await context.resume();
    drones.forEach((drone) => {
      drone.play();
    });
    bassLoop();
    intervalRef.current = setInterval(
      bassLoop,
      BEAT_DURATION,
    );
  };

  useEffect(() => endInterval, []);

  const stop = () => {
    endInterval();
    pulses.forEach((pulse) => {
      pulse.stop();
    });
    drones.forEach((drone) => {
      drone.stop();
    });
  };

  return { play: handler, stop };
};
