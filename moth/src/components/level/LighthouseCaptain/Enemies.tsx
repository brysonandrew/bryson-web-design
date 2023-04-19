import { useMothContext } from "@moth-state/Context";
import type { FC } from "react";
import type { TSpawn } from "@moth-state/types";
import { Bug } from "@moth-components/enemies/creatures/bug";
import { Dynastinae } from "@moth-components/enemies/creatures/dynastinae";
import { Galamodo } from "@moth-components/enemies/creatures/galamodo";
import { Hercules } from "@moth-components/enemies/creatures/hercules";
import { Mite } from "@moth-components/enemies/creatures/mite";
import { MiteI } from "@moth-components/enemies/creatures/mite-i";
import { LIGHTHOUSE_CAPTAIN_KEY } from "@moth-components/enemies/bosses/lighthouse-captain/constants";
import { LighthouseCaptain } from "@moth-components/enemies/bosses/lighthouse-captain";

export const Enemies: FC = () => {
  const { killRecord, spawns } = useMothContext();
  return (
    <group>
      {spawns.map((spawn: TSpawn, index: number) => {
        if (killRecord[spawn.id]) return;
        switch (spawn.type) {
          case LIGHTHOUSE_CAPTAIN_KEY: {
            return (
              <LighthouseCaptain
                key={`${spawn.id}-${index}`}
                {...spawn}
              />
            );
          }
          case "Galamodo": {
            return (
              <Galamodo
                key={`${spawn.id}-${index}`}
                {...spawn}
              />
            );
          }
          case "Bug": {
            return (
              <Bug
                key={`${spawn.id}-${index}`}
                {...spawn}
              />
            );
          }
          case "Hercules": {
            return (
              <Hercules 
                key={`${spawn.id}-${index}`}
                {...spawn}
              />
            );
          }
          case "Mite": {
            return (
              <Mite
                key={`${spawn.id}-${index}`}
                {...spawn}
              />
            );
          }
          case "MiteI": {
            return (
              <MiteI
                key={`${spawn.id}-${index}`}
                {...spawn}
              />
            );
          } 
          default: {
            return ( 
              <Dynastinae
                key={`${spawn.id}-${index}`}
                {...spawn}
              />
            );
          }
        }
      })}
    </group>
  );
};
