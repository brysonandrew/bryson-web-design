import { useMothContext } from "@moth-state/Context";
import type { FC } from "react";
import { Dynastinae } from "./dynastinae";
import type { TSpawn } from "@moth-state/types";
import { Hercules } from "./hercules";
import { Bug } from "./bug";
import { Galamodo } from "./galamodo";
import { RiverHorse } from "./river-horse";

export const Enemies: FC = () => {
  const { killRecord, spawns } = useMothContext();
  return (
    <group>
      {spawns.map((spawn: TSpawn, index: number) => {
        if (killRecord[spawn.name]) return;
        switch (spawn.type) {
          case "RiverHorse": {
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
