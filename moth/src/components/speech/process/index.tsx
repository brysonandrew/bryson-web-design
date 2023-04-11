import type { FC } from "react";
import { useProcessors } from "./useProcessors";
import { Params } from "./params";
import type { TProcessorsConfig } from "./config";
import clsx from "clsx";
import { motion } from "framer-motion";
import { Stop } from "@moth-components/icons/Stop";
import { Play } from "@moth-components/icons/Play";
import { Checkbox } from "@moth-components/inputs/checkbox";
import { LG_H, LG } from "@moth-constants/styles";

export const Process: FC<TProcessorsConfig> = (
  props
): JSX.Element | null => {
  const {
    record,
    play,
    stop,
    state: { isPlaying, isLoop },
    update,
  } = useProcessors(props);
  if (!record) return null;
  return (
    <div>
      <header className="flex justify-between w-full">
        <div>processors</div>
        <div className="flex items-center">
          <div className="flex items-center">
            <div>loop</div>
            <div className="p-1" />
            <Checkbox
              classValue="text-white"
              inputClassValue="text-white"
              name="isLoop"
              checked={isLoop}
              onChange={update}
            />
          </div>
          <div className={clsx("mx-2", LG_H)} />
          {isPlaying ? (
            <motion.button
              className={clsx("shadow-red-sm text-red", LG)}
              onTap={stop}
            >
              <Stop />
            </motion.button>
          ) : (
            <motion.button
              className={clsx(
                "shadow-green-sm text-green",
                LG
              )}
              onTap={play}
            >
              <Play />
            </motion.button>
          )}
        </div>
      </header>
      <div className="py-1" />
      <ul className="shadow-red-06">
        {Object.entries(record).map(([name, params]) => (
          <li key={name}>
            <div>{name}</div>
            <div className="py-0.5" />
            <Params {...params} />
          </li>
        ))}
      </ul>
    </div>
  );
};
