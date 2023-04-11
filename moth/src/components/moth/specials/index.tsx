import { useMothContext } from "@moth-state/Context";
import type { FC } from "react";
import { NeutronicBeam } from "./NeutronicBeam";
import { TacticalNuke } from "./TacticalNuke";

export const Specials: FC = () => {
  const { specials } = useMothContext();

  const entries = Object.entries(specials);
  return (
    <>
      {entries.map(([key, value]) => {
        if (value) {
          switch (key) {
            case "NeutronicBeam":
              return <NeutronicBeam key={key} />;
            case "TacticalNuke":
              return <TacticalNuke key={key} />;
            default:
              return null;
          }
        }
      })}
    </>
  );
};
