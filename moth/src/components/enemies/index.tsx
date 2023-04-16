import { useMothContext } from "@moth-state/Context";
import type { FC } from "react";
import { Dynastinae } from "./creatures/dynastinae";
import type { TSpawn } from "@moth-state/types";
import { Bug } from "./creatures/bug";
import { Galamodo } from "./creatures/galamodo";
import { RiverHorse } from "./bosses/river-horse";
import { RIVER_HORSE_KEY } from "./bosses/river-horse/constants";
import { Hercules } from "./creatures/hercules";

export const Enemies: FC = () => {
  const { killRecord, spawns } = useMothContext();
  return (
    <group>
      {spawns.map((spawn: TSpawn, index: number) => {
        if (killRecord[spawn.name]) return;
        switch (spawn.type) {
          case RIVER_HORSE_KEY: {
            return (
              <RiverHorse
                key={`${spawn.name}-${index}`}
                {...spawn}
              /> 
            );
          }
          case "Galamodo": {
            return (
              <Galamodo
                key={`${spawn.name}-${index}`}
                {...spawn}
              />
            );
          }
          case "Bug": {
            return (
              <Bug
                key={`${spawn.name}-${index}`}
                {...spawn}
              />
            );
          }
          case "Hercules": {
            return (
              <Hercules
                key={`${spawn.name}-${index}`}
                {...spawn}
              />
            );
          }
          default: {
            return (
              <Dynastinae
                key={`${spawn.name}-${index}`}
                {...spawn}
              />
            );
          }
        }
      })}
    </group>
  );
};
