import { useInterval } from "@moth-hooks/useInterval";
import { useMothContext } from "@moth-state/Context";
import { useRef, useState } from "react";
import type {
  TPhase,
  TPlayers,
  TPlayer,
} from "./ost/types";
import { useArpeggio } from "./ost/tracks/brachyurazoa/sounds/useArpeggio";

type TConfig = {
  phases: TPhase[];
  interval: number;
};
export const useLoop = ({ phases, interval }: TConfig) => {
  const [time, setTime] = useState<number | null>(null);

  const indexRef = useRef<number>(0);
  const sustainRef = useRef<number>(0);
  const repeatRef = useRef<number>(0);

  const arpeggio = useArpeggio();

  const { context } = useMothContext();

  const loop = () => {
    const { repeat, sustain, sounds } =
      phases[indexRef.current];

    if (
      typeof sustain === "undefined" ||
      sustainRef.current === 0
    ) {
      if (typeof sounds !== "undefined") {
        sounds.forEach((players: TPlayers) => {
          players.forEach(
            (player: TPlayer, index, { length }) => {
              if (typeof player === "function") {
                const t =
                  interval + interval * (sustain ?? 0);
                const duration = t / length;
                player({
                  start: index * duration,
                  duration,
                });
              }
            },
          );
        });
      }
    }

    if (
      typeof sustain !== "undefined" &&
      sustain !== sustainRef.current
    ) {
      sustainRef.current++;
      return;
    }

    if (
      typeof repeat !== "undefined" &&
      repeat !== repeatRef.current
    ) {
      repeatRef.current++;
      return;
    }

    indexRef.current =
      (indexRef.current + 1) % phases.length;
    repeatRef.current = 0;
    sustainRef.current = 0;
  };

  useInterval(loop, time);

  const preload = async () => {
    console.log("PRELOAD");
  };

  const play = async () => {
    await context.resume();
    await preload();
    setTime(interval * 1000);
  };

  const stop = () => {
    arpeggio.stop();
  };

  return { play, stop };
};
